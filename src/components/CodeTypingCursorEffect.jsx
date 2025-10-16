import { useEffect, useRef } from "react";

export default function CodeTypingCursorEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 🧩 Ekran o‘lchamiga moslash
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 💡 Haqiqiy kod satrlari
    const codeLines = [
      "const app = initializeApp(config);",
      "if(user.isAdmin){ login(); }",
      "function runTask(id){ return id * 2; }",
      "console.log('Hello World');",
      "useEffect(()=>{},[]);",
      "fetch('/api/data').then(r=>r.json())",
      "let total = price * qty;",
      "return <div>{children}</div>;",
      "const result = arr.map(x => x * 2);",
      "export default function App(){}",
      "setTimeout(()=>run(),1000);",
      "const [count,setCount]=useState(0);",
      "for(let i=0;i<10;i++){sum+=i;}",
    ];

    let currentCode = codeLines[Math.floor(Math.random() * codeLines.length)];
    let currentText = "";
    let index = 0;
    let phase = "typing"; // typing -> hold -> erasing
    let typingSpeed = 70;
    let erasingSpeed = 50;
    let holdTime = 1200;
    let x = Math.random() * canvas.width * 0.8;
    let y = Math.random() * canvas.height * 0.8 + 50;

    let cursorVisible = true;
    setInterval(() => {
      cursorVisible = !cursorVisible;
    }, 500); // kursor har 0.5 sekundda miltillaydi

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "22px monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(0,255,128,1)";
      ctx.fillText(currentText, x, y);

      // ✨ kursor effekti
      if (cursorVisible && phase !== "erasing") {
        const textWidth = ctx.measureText(currentText).width;
        ctx.fillRect(x + textWidth + 2, y - 16, 2, 20); // miltillovchi chiziq
      }
    }

    function animate() {
      draw();

      if (phase === "typing") {
        if (index < currentCode.length) {
          currentText = currentCode.slice(0, index + 1);
          index++;
        } else {
          phase = "hold";
          setTimeout(() => {
            phase = "erasing";
          }, holdTime);
        }
      } else if (phase === "erasing") {
        if (index > 0) {
          index--;
          currentText = currentCode.slice(0, index);
        } else {
          // yangi kod va yangi joy
          currentCode = codeLines[Math.floor(Math.random() * codeLines.length)];
          x = Math.random() * canvas.width * 0.8;
          y = Math.random() * canvas.height * 0.8 + 50;
          phase = "typing";
        }
      }

      requestAnimationFrame(() => {
        setTimeout(animate, phase === "typing" ? typingSpeed : erasingSpeed);
      });
    }

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen bg-black -z-10"
    />
  );
}
