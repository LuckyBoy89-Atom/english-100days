function App() {
  const [currentDay, setCurrentDay] = React.useState(3);
  const [streak, setStreak] = React.useState(3);
  const [totalWords, setTotalWords] = React.useState(30);
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [completedTasks, setCompletedTasks] = React.useState({});

  const lessons = [
    { day: 1, title: "Self Introduction", theme: "แนะนำตัวเอง", status: "completed", vocab: ["name", "nice", "meet", "work", "company"], sentences: ["Hi, I'm ___.", "Nice to meet you.", "I work at ___.", "I'm in charge of ___.", "Please call me ___."] },
    { day: 2, title: "Greetings & Small Talk", theme: "ทักทาย + คุยเล็กๆ", status: "completed", vocab: ["morning", "afternoon", "evening", "how", "fine"], sentences: ["Good morning!", "How are you?", "I'm fine, thank you.", "How was your weekend?", "See you later."] },
    { day: 3, title: "Numbers & Time", theme: "ตัวเลข + เวลา", status: "in-progress", vocab: ["one", "ten", "twenty", "o'clock", "half"], sentences: ["What time is it?", "It's 9 o'clock.", "Let's meet at 10 AM.", "The meeting is at 2:30.", "I'll be there in 5 minutes."] },
    { day: 4, title: "Days & Dates", theme: "วัน + วันที่", status: "locked", vocab: ["Monday", "Friday", "January", "today", "tomorrow"], sentences: ["What day is today?", "Today is Monday.", "My birthday is June 15th.", "Can we schedule for Tuesday?", "The deadline is next week."] },
    { day: 5, title: "Office Vocabulary", theme: "คำศัพท์ออฟฟิศ", status: "locked", vocab: ["desk", "computer", "meeting", "email", "report"], sentences: ["I need to check my email.", "Can I borrow your pen?", "Where is the meeting room?", "I'll send you an email.", "Let's have a meeting."] },
    { day: 6, title: "Asking Questions", theme: "การถามคำถาม", status: "locked", vocab: ["what", "where", "when", "who", "how"], sentences: ["What is this?", "Where is the bathroom?", "When is the deadline?", "Who is in charge?", "How do I do this?"] },
    { day: 7, title: "Week 1 Review", theme: "ทบทวนสัปดาห์ 1", status: "locked", vocab: ["Review all"], sentences: ["Review all sentences from Day 1-6"] },
  ];

  const todaySchedule = [
    { time: "🌅 Morning", task: "Vocabulary: Numbers 1-100", duration: "15 min", icon: "📚" },
    { time: "☀️ Afternoon", task: "Listening: Tell the time", duration: "15 min", icon: "🎧" },
    { time: "🌆 Evening", task: "Business: Schedule meetings", duration: "15 min", icon: "💼" },
    { time: "🌙 Night", task: "Review & Quiz", duration: "15 min", icon: "✍️" },
  ];

  const toggleTask = (index) => {
    setCompletedTasks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progress = (currentDay / 100) * 100;

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return '✅';
      case 'in-progress': return '⏳';
      case 'locked': return '🔒';
      default: return '⬜';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 border-green-400';
      case 'in-progress': return 'bg-yellow-100 border-yellow-400';
      case 'locked': return 'bg-gray-100 border-gray-300';
      default: return 'bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">🎯 English Mastery 100 Days</h1>
              <p className="text-indigo-200">เป้าหมาย: ทำงานกับชาวต่างชาติได้</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">Day {currentDay}</div>
              <div className="text-indigo-200">of 100</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl mb-1">🔥</div>
            <div className="text-2xl font-bold text-orange-500">{streak}</div>
            <div className="text-gray-500 text-sm">Day Streak</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl mb-1">📚</div>
            <div className="text-2xl font-bold text-blue-500">{totalWords}</div>
            <div className="text-gray-500 text-sm">Words Learned</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl mb-1">⏱️</div>
            <div className="text-2xl font-bold text-green-500">{currentDay}</div>
            <div className="text-gray-500 text-sm">Hours Total</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl mb-1">🏆</div>
            <div className="text-2xl font-bold text-purple-500">{Math.round(progress)}%</div>
            <div className="text-gray-500 text-sm">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-gray-700">📊 Overall Progress</span>
            <span className="text-gray-500">Day {currentDay} / 100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">

          {/* Today's Schedule */}
          <div className="bg-white rounded-xl p-5 shadow-md">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="mr-2">⏰</span> Today's Schedule (Day {currentDay})
            </h2>
            <div className="space-y-3">
              {todaySchedule.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => toggleTask(index)}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    completedTasks[index] 
                      ? 'bg-green-50 border-green-400' 
                      : 'bg-gray-50 border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{completedTasks[index] ? '✅' : '⬜'}</span>
                      <div>
                        <div className="font-medium text-gray-800">{item.time}</div>
                        <div className="text-sm text-gray-600">{item.task}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Today's Progress</div>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                  <div 
                    className="bg-indigo-500 h-2 rounded-full transition-all"
                    style={{ width: `${(completedCount / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{completedCount}/4</span>
              </div>
            </div>
          </div>

          {/* Week Overview */}
          <div className="bg-white rounded-xl p-5 shadow-md">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="mr-2">📅</span> Week 1 Lessons
            </h2>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <div 
                  key={lesson.day}
                  onClick={() => lesson.status !== 'locked' && setSelectedDay(lesson)}
                  className={`p-3 rounded-lg border-2 transition-all ${getStatusColor(lesson.status)} ${
                    lesson.status !== 'locked' ? 'cursor-pointer hover:shadow-md' : 'opacity-60'
                  } ${selectedDay?.day === lesson.day ? 'ring-2 ring-indigo-500' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getStatusIcon(lesson.status)}</span>
                      <div>
                        <div className="font-medium text-gray-800">Day {lesson.day}: {lesson.title}</div>
                        <div className="text-xs text-gray-500">{lesson.theme}</div>
                      </div>
                    </div>
                    {lesson.status === 'in-progress' && (
                      <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                        TODAY
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Day Detail */}
        {selectedDay && (
          <div className="mt-6 bg-white rounded-xl p-5 shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  📖 Day {selectedDay.day}: {selectedDay.title}
                </h2>
                <p className="text-gray-500">{selectedDay.theme}</p>
              </div>
              <button 
                onClick={() => setSelectedDay(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">📚 Vocabulary</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDay.vocab.map((word, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-sm border border-blue-200">
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2">💬 Key Sentences</h3>
                <ul className="space-y-1">
                  {selectedDay.sentences.map((sentence, i) => (
                    <li key={i} className="text-sm text-gray-700">• {sentence}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Vocabulary Bank Preview */}
        <div className="mt-6 bg-white rounded-xl p-5 shadow-md">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <span className="mr-2">🗃️</span> Vocabulary Bank (Week 1)
          </h2>
          <div className="flex flex-wrap gap-2">
            {["name", "nice", "meet", "work", "company", "morning", "afternoon", "evening", "how", "fine", "one", "ten", "twenty", "o'clock", "half"].map((word, i) => (
              <span 
                key={i} 
                className="bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:shadow-md transition-all cursor-pointer"
              >
                {word}
              </span>
            ))}
            <span className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-400">
              +{totalWords - 15} more...
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          🧠 Powered by Claude Opus 4.5 | Made for Notion
        </div>
      </div>
    </div>
  );
}