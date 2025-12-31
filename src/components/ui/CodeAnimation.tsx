'use client';

import { useState, useEffect } from 'react';

interface CodeToken {
  text: string;
  type: 'keyword' | 'function' | 'string' | 'variable' | 'bracket' | 'operator' | 'comment' | 'tag' | 'prop' | 'plain' | 'number';
}

interface CodeLine {
  tokens: CodeToken[];
  delay: number;
}

const codeLines: CodeLine[] = [
  {
    delay: 0,
    tokens: [
      { text: 'import', type: 'keyword' },
      { text: ' { useState, useEffect } ', type: 'plain' },
      { text: 'from', type: 'keyword' },
      { text: " 'react'", type: 'string' },
      { text: ';', type: 'plain' },
    ],
  },
  {
    delay: 600,
    tokens: [
      { text: 'import', type: 'keyword' },
      { text: ' { fetchAnalytics } ', type: 'plain' },
      { text: 'from', type: 'keyword' },
      { text: " './api'", type: 'string' },
      { text: ';', type: 'plain' },
    ],
  },
  { delay: 1100, tokens: [] },
  {
    delay: 1300,
    tokens: [
      { text: 'export default function', type: 'keyword' },
      { text: ' Dashboard', type: 'function' },
      { text: '()', type: 'bracket' },
      { text: ' {', type: 'bracket' },
    ],
  },
  {
    delay: 1900,
    tokens: [
      { text: '  const', type: 'keyword' },
      { text: ' [data, setData]', type: 'variable' },
      { text: ' = ', type: 'operator' },
      { text: 'useState', type: 'function' },
      { text: '<', type: 'bracket' },
      { text: 'Analytics[]', type: 'plain' },
      { text: '>', type: 'bracket' },
      { text: '([])', type: 'bracket' },
      { text: ';', type: 'plain' },
    ],
  },
  {
    delay: 2600,
    tokens: [
      { text: '  const', type: 'keyword' },
      { text: ' [loading, setLoading]', type: 'variable' },
      { text: ' = ', type: 'operator' },
      { text: 'useState', type: 'function' },
      { text: '(', type: 'bracket' },
      { text: 'true', type: 'keyword' },
      { text: ')', type: 'bracket' },
      { text: ';', type: 'plain' },
    ],
  },
  { delay: 3200, tokens: [] },
  {
    delay: 3400,
    tokens: [
      { text: '  ', type: 'plain' },
      { text: 'useEffect', type: 'function' },
      { text: '(() => {', type: 'bracket' },
    ],
  },
  {
    delay: 3900,
    tokens: [
      { text: '    ', type: 'plain' },
      { text: 'fetchAnalytics', type: 'function' },
      { text: '()', type: 'bracket' },
    ],
  },
  {
    delay: 4400,
    tokens: [
      { text: '      .', type: 'plain' },
      { text: 'then', type: 'function' },
      { text: '(', type: 'bracket' },
      { text: 'res', type: 'variable' },
      { text: ' => ', type: 'operator' },
      { text: 'setData', type: 'function' },
      { text: '(res.data))', type: 'bracket' },
    ],
  },
  {
    delay: 5000,
    tokens: [
      { text: '      .', type: 'plain' },
      { text: 'finally', type: 'function' },
      { text: '(() => ', type: 'bracket' },
      { text: 'setLoading', type: 'function' },
      { text: '(', type: 'bracket' },
      { text: 'false', type: 'keyword' },
      { text: '))', type: 'bracket' },
      { text: ';', type: 'plain' },
    ],
  },
  {
    delay: 5600,
    tokens: [
      { text: '  }, []);', type: 'bracket' },
    ],
  },
  { delay: 5900, tokens: [] },
  {
    delay: 6100,
    tokens: [
      { text: '  ', type: 'plain' },
      { text: 'if', type: 'keyword' },
      { text: ' (loading) ', type: 'bracket' },
      { text: 'return', type: 'keyword' },
      { text: ' <', type: 'bracket' },
      { text: 'Spinner', type: 'tag' },
      { text: ' />;', type: 'bracket' },
    ],
  },
  { delay: 6700, tokens: [] },
  {
    delay: 6900,
    tokens: [
      { text: '  return', type: 'keyword' },
      { text: ' (', type: 'bracket' },
    ],
  },
  {
    delay: 7200,
    tokens: [
      { text: '    <', type: 'bracket' },
      { text: 'div', type: 'tag' },
      { text: ' className', type: 'prop' },
      { text: '=', type: 'operator' },
      { text: '"grid gap-6"', type: 'string' },
      { text: '>', type: 'bracket' },
    ],
  },
  {
    delay: 7700,
    tokens: [
      { text: '      <', type: 'bracket' },
      { text: 'StatsGrid', type: 'tag' },
      { text: ' data', type: 'prop' },
      { text: '=', type: 'operator' },
      { text: '{data.stats}', type: 'variable' },
      { text: ' />', type: 'bracket' },
    ],
  },
  {
    delay: 8200,
    tokens: [
      { text: '      <', type: 'bracket' },
      { text: 'Chart', type: 'tag' },
      { text: ' data', type: 'prop' },
      { text: '=', type: 'operator' },
      { text: '{data.chart}', type: 'variable' },
      { text: ' />', type: 'bracket' },
    ],
  },
  {
    delay: 8700,
    tokens: [
      { text: '    </', type: 'bracket' },
      { text: 'div', type: 'tag' },
      { text: '>', type: 'bracket' },
    ],
  },
  {
    delay: 9000,
    tokens: [
      { text: '  );', type: 'bracket' },
    ],
  },
  {
    delay: 9300,
    tokens: [
      { text: '}', type: 'bracket' },
    ],
  },
];

const tokenColors: Record<CodeToken['type'], string> = {
  keyword: 'text-purple-400',
  function: 'text-blue-400',
  string: 'text-green-400',
  variable: 'text-yellow-300',
  bracket: 'text-neutral-400',
  operator: 'text-pink-400',
  comment: 'text-neutral-500',
  tag: 'text-cyan-400',
  prop: 'text-orange-300',
  plain: 'text-neutral-300',
  number: 'text-orange-400',
};

export default function CodeAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentLineChars, setCurrentLineChars] = useState<number>(0);
  const [buildProgress, setBuildProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    let charIndex = 0;
    let animationFrame: number;

    const getLineText = (lineIndex: number) => {
      return codeLines[lineIndex].tokens.map(t => t.text).join('');
    };

    const animate = () => {
      if (currentLine >= codeLines.length) {
        setIsComplete(true);
        setBuildProgress(100);
        return;
      }

      const lineText = getLineText(currentLine);

      if (charIndex <= lineText.length) {
        setCurrentLineChars(charIndex);
        charIndex++;
        setBuildProgress(Math.round(((currentLine + charIndex / lineText.length) / codeLines.length) * 100));
        animationFrame = window.setTimeout(animate, lineText.length === 0 ? 50 : 25);
      } else {
        setVisibleLines(currentLine + 1);
        currentLine++;
        charIndex = 0;

        if (currentLine < codeLines.length) {
          const delay = codeLines[currentLine].delay - codeLines[currentLine - 1].delay;
          animationFrame = window.setTimeout(animate, Math.max(delay - 200, 100));
        } else {
          setIsComplete(true);
          setBuildProgress(100);
        }
      }
    };

    const startTimer = setTimeout(animate, 500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(animationFrame);
    };
  }, []);

  const renderLine = (line: CodeLine, lineIndex: number) => {
    const lineText = line.tokens.map(t => t.text).join('');

    if (lineIndex < visibleLines) {
      // Fully visible line
      return line.tokens.map((token, tokenIndex) => (
        <span key={tokenIndex} className={tokenColors[token.type]}>
          {token.text}
        </span>
      ));
    } else if (lineIndex === visibleLines) {
      // Currently typing line
      let charCount = 0;
      return line.tokens.map((token, tokenIndex) => {
        const tokenStart = charCount;
        charCount += token.text.length;

        if (tokenStart >= currentLineChars) {
          return null;
        }

        const visibleText = token.text.slice(0, Math.max(0, currentLineChars - tokenStart));
        return (
          <span key={tokenIndex} className={tokenColors[token.type]}>
            {visibleText}
          </span>
        );
      });
    }
    return null;
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code Editor */}
        <div className="bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden">
          <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-neutral-500 font-mono">Dashboard.tsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-4 font-mono text-xs leading-relaxed h-72 overflow-hidden">
            {codeLines.map((line, index) => (
              <div key={index} className="flex min-h-[1.5rem]">
                <span className="text-neutral-600 w-6 text-right mr-4 select-none">
                  {index + 1}
                </span>
                <span className="flex-1">
                  {renderLine(line, index)}
                  {index === visibleLines && !isComplete && (
                    <span className="animate-pulse text-white">|</span>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-neutral-800 px-4 py-2 border-t border-neutral-700">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500">TypeScript React</span>
              <span className={isComplete ? 'text-green-400' : 'text-yellow-400'}>
                {isComplete ? 'Build complete' : 'Building...'}
              </span>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-white border border-neutral-200 shadow-2xl overflow-hidden">
          <div className="bg-neutral-100 px-4 py-2 flex items-center gap-2 border-b border-neutral-200">
            <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
            <div className="flex-1 mx-4">
              <div className="bg-white border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-500 text-center">
                localhost:3000/dashboard
              </div>
            </div>
          </div>

          <div className="p-4 h-72 overflow-hidden bg-neutral-50">
            {/* Header */}
            <div
              className={`transition-all duration-500 ${buildProgress >= 25 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-5 bg-neutral-900 w-24 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-6 bg-neutral-200 rounded"></div>
                  <div className="h-6 w-6 bg-neutral-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-3 gap-3 mb-4 transition-all duration-500 delay-100 ${buildProgress >= 45 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="bg-white border border-neutral-200 p-3 rounded shadow-sm">
                <div className="text-xs text-neutral-400 mb-1">Users</div>
                <div className="text-lg font-bold text-neutral-900">2,847</div>
                <div className="text-xs text-green-500">+12.5%</div>
              </div>
              <div className="bg-white border border-neutral-200 p-3 rounded shadow-sm">
                <div className="text-xs text-neutral-400 mb-1">Revenue</div>
                <div className="text-lg font-bold text-neutral-900">$48.2k</div>
                <div className="text-xs text-green-500">+8.1%</div>
              </div>
              <div className="bg-white border border-neutral-200 p-3 rounded shadow-sm">
                <div className="text-xs text-neutral-400 mb-1">Orders</div>
                <div className="text-lg font-bold text-neutral-900">1,284</div>
                <div className="text-xs text-red-500">-2.3%</div>
              </div>
            </div>

            {/* Chart */}
            <div
              className={`bg-white border border-neutral-200 p-3 rounded shadow-sm mb-4 transition-all duration-500 delay-200 ${buildProgress >= 65 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="text-xs text-neutral-500 mb-2">Performance</div>
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-neutral-900 rounded-t transition-all duration-300"
                    style={{
                      height: buildProgress >= 65 ? `${h}%` : '0%',
                      transitionDelay: `${i * 50}ms`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div
              className={`bg-white border border-neutral-200 p-3 rounded shadow-sm transition-all duration-500 delay-300 ${buildProgress >= 85 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="text-xs text-neutral-500 mb-2">Recent Activity</div>
              <div className="space-y-2">
                {['New user registered', 'Order #1284 completed', 'Payment received'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 bg-neutral-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-neutral-900 transition-all duration-300 ease-out"
          style={{ width: `${buildProgress}%` }}
        ></div>
      </div>
      <div className="mt-2 flex justify-between text-xs text-neutral-500">
        <span>{isComplete ? 'Build complete' : 'Building components...'}</span>
        <span>{buildProgress}%</span>
      </div>
    </div>
  );
}
