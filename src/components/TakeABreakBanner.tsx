import React, { useState, useEffect, useRef } from 'react';
import { Gamepad2, Trophy, X, Play, RotateCcw, Volume2, VolumeX, Flame } from 'lucide-react';

export const TakeABreakBanner: React.FC = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [gamesPlayed, setGamesPlayed] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('laverne_games_played');
      return saved ? parseInt(saved, 10) : 42;
    } catch {
      return 42;
    }
  });

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Lead Architect', score: 480 },
    { rank: 2, name: 'Night Debugger', score: 390 },
    { rank: 3, name: 'You (Visitor)', score: 310 },
  ]);

  // Canvas Game State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Play synthesized audio blip
  const playBlip = (freq: number) => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // AudioContext suppressed
    }
  };

  const handleOpenGame = () => {
    setIsGameOpen(true);
    const nextCount = gamesPlayed + 1;
    setGamesPlayed(nextCount);
    try {
      localStorage.setItem('laverne_games_played', nextCount.toString());
    } catch {
      // ignore
    }
  };

  // Brick Breaker Game Loop
  useEffect(() => {
    if (!isGameOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let paddleWidth = 75;
    let paddleHeight = 10;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height - 30;
    let dx = 3;
    let dy = -3;
    let ballRadius = 6;
    let currentScore = 0;
    let currentLives = 3;

    // Bricks
    const rowCount = 4;
    const colCount = 6;
    const brickWidth = 50;
    const brickHeight = 14;
    const brickPadding = 8;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 25;

    const bricks: { x: number; y: number; status: number }[][] = [];
    for (let c = 0; c < colCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < rowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    // Keyboard handlers
    let rightPressed = false;
    let leftPressed = false;

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'd') rightPressed = true;
      if (e.key === 'Left' || e.key === 'ArrowLeft' || e.key === 'a') leftPressed = true;
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'd') rightPressed = false;
      if (e.key === 'Left' || e.key === 'ArrowLeft' || e.key === 'a') leftPressed = false;
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = Math.max(0, Math.min(canvas.width - paddleWidth, relativeX - paddleWidth / 2));
      }
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    canvas.addEventListener('mousemove', mouseMoveHandler);

    // Collision detection
    const collisionDetection = () => {
      for (let c = 0; c < colCount; c++) {
        for (let r = 0; r < rowCount; r++) {
          const b = bricks[c][r];
          if (b.status === 1) {
            if (
              ballX > b.x &&
              ballX < b.x + brickWidth &&
              ballY > b.y &&
              ballY < b.y + brickHeight
            ) {
              dy = -dy;
              b.status = 0;
              currentScore += 20;
              setGameScore(currentScore);
              playBlip(600 + r * 100);
            }
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw bricks with vivid theme colors
      const brickColors = ['#FF5A2C', '#FF8533', '#FFB020', '#10B981'];
      for (let c = 0; c < colCount; c++) {
        for (let r = 0; r < rowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.roundRect(brickX, brickY, brickWidth, brickHeight, 3);
            ctx.fillStyle = brickColors[r % brickColors.length];
            ctx.fill();
            ctx.closePath();
          }
        }
      }

      // Draw Ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.closePath();

      // Draw Paddle
      ctx.beginPath();
      ctx.roundRect(paddleX, canvas.height - paddleHeight - 5, paddleWidth, paddleHeight, 5);
      ctx.fillStyle = '#FF5A2C';
      ctx.fill();
      ctx.closePath();

      collisionDetection();

      // Wall bouncing
      if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
        dx = -dx;
        playBlip(400);
      }
      if (ballY + dy < ballRadius) {
        dy = -dy;
        playBlip(400);
      } else if (ballY + dy > canvas.height - paddleHeight - 8) {
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
          dy = -dy;
          playBlip(550);
        } else if (ballY + dy > canvas.height - ballRadius) {
          currentLives -= 1;
          setLives(currentLives);
          playBlip(200);
          if (currentLives <= 0) {
            setIsGameOver(true);
            return;
          } else {
            ballX = canvas.width / 2;
            ballY = canvas.height - 30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width - paddleWidth) / 2;
          }
        }
      }

      // Paddle movement
      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 5;
      }

      ballX += dx;
      ballY += dy;

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
      canvas.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [isGameOpen]);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Big Dark Maroon Rounded Banner */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl transition-all duration-500 border border-white/10"
          style={{
            backgroundColor: 'var(--c-dark)',
            color: 'var(--c-cream)',
          }}
        >
          {/* Decorative Colored Bricks in Top-Right Corner */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 flex flex-col gap-1.5 opacity-80 pointer-events-none">
            <div className="flex gap-1.5">
              <span className="w-6 h-3 rounded-xs bg-[#FF5A2C]" />
              <span className="w-8 h-3 rounded-xs bg-[#FF8533]" />
              <span className="w-5 h-3 rounded-xs bg-[#FFB020]" />
            </div>
            <div className="flex gap-1.5">
              <span className="w-9 h-3 rounded-xs bg-[#10B981]" />
              <span className="w-6 h-3 rounded-xs bg-[#FF5A2C]" />
            </div>
            <div className="flex gap-1.5">
              <span className="w-5 h-3 rounded-xs bg-[#FFB020]" />
              <span className="w-8 h-3 rounded-xs bg-[#10B981]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono text-[var(--c-accent)] font-semibold">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>DEV RECOVERY CORNER</span>
              </div>

              <h3 className="font-heading text-5xl sm:text-6xl md:text-7xl text-[var(--c-cream)] tracking-wide leading-none">
                TAKE A BREAK
              </h3>

              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                Every screen hides a little clutter. Break it all and see the clean design underneath.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleOpenGame}
                  className="px-6 sm:px-8 py-3.5 rounded-full font-heading text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--c-cream)',
                    color: 'var(--c-dark)',
                  }}
                >
                  <Play className="w-4 h-4 fill-current text-[var(--c-accent)]" />
                  <span>PLAY A GAME</span>
                </button>

                <span className="font-mono text-xs text-white/60">
                  {gamesPlayed} games played &middot; High scores saved
                </span>
              </div>
            </div>

            {/* Right: Mini Leaderboard Card (3 rows) */}
            <div className="lg:col-span-5 bg-black/30 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                <span className="font-bold text-[var(--c-cream)] flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-[var(--c-accent)]" />
                  <span>HALL OF FAME</span>
                </span>
                <span className="text-white/50">TOP 3</span>
              </div>

              <div className="space-y-2">
                {leaderboard.map((row) => (
                  <div
                    key={row.rank}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 font-mono text-xs text-white/90"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-heading text-sm text-[var(--c-accent)]">
                        #{row.rank}
                      </span>
                      <span className="font-sans font-medium">{row.name}</span>
                    </div>
                    <span className="font-bold text-[var(--c-cream)]">{row.score} PTS</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Brick Breaker Mini-Game Modal */}
      {isGameOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsGameOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl text-white flex flex-col items-center"
            style={{ backgroundColor: 'var(--c-dark)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Game Header */}
            <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[var(--c-accent)] font-bold">SCORE: {gameScore}</span>
                <span className="text-white/40">|</span>
                <span className="text-emerald-400 font-bold">LIVES: {'❤'.repeat(Math.max(0, lives))}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70"
                  aria-label="Toggle sound"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsGameOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
                  aria-label="Close game"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-inner">
              <canvas
                ref={canvasRef}
                width={400}
                height={260}
                className="w-full max-w-[400px] cursor-none"
              />

              {isGameOver && (
                <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center p-4">
                  <h4 className="font-heading text-3xl text-[var(--c-accent)]">GAME OVER</h4>
                  <p className="font-mono text-xs text-white/80 mt-1">Final Score: {gameScore}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsGameOver(false);
                      setLives(3);
                      setGameScore(0);
                    }}
                    className="mt-4 px-6 py-2 rounded-full bg-[var(--c-cream)] text-[var(--c-dark)] font-heading text-xs uppercase tracking-wider"
                  >
                    PLAY AGAIN
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 text-[11px] font-mono text-white/60 text-center">
              Use Mouse or &larr; / &rarr; keys to move the paddle
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
