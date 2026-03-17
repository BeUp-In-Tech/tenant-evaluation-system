import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import TenantSidebar from "../../component/tenantComponent/tenantSidebar.jsx";

import TenantTopbar from "../../component/tenantComponent/tenantTopbar.jsx";



const dailyTasks = [

  {

    id: "area-check",

    title: "Weekly Common Area Check",

    status: "IN PROGRESS",

    statusColor: "text-blue-500",

    statusDot: "bg-blue-500",

    icon: (

      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">

        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#3b82f6" strokeWidth="1.8" />

        <path d="M8 2v4M16 2v4M3 10h18" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />

        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />

      </svg>

    ),

    completed: false,

  },

  {

    id: "feedback",

    title: "Submit Monthly Feedback",

    status: "COMPLETED",

    statusColor: "text-green-500",

    statusDot: "bg-green-500",

    icon: (

      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">

        <circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="1.8" />

        <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      </svg>

    ),

    completed: true,

  },

  {

    id: "contact",

    title: "Verify Contact Information",

    status: null,

    icon: (

      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">

        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#ef4444" strokeWidth="1.8" />

        <path d="M8 2v4M16 2v4M3 10h18" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />

        <path d="M9 16l2 2 4-4" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      </svg>

    ),

    completed: false,

    urgent: true,

  },

];



export default function TenantOverviewPage({ onNavigate }) {

  const [tasks, setTasks] = useState(dailyTasks);

  const navigate = useNavigate();



  const handleTaskComplete = (taskId) => {

    setTasks(tasks.map(task =>

      task.id === taskId

        ? { ...task, completed: true, status: "COMPLETED", statusColor: "text-green-500", statusDot: "bg-green-500" }

        : task

    ));

    console.log(`Task ${taskId} marked as complete`);

  };



  const handleTaskDetails = (taskId) => {

    console.log(`Viewing details for task ${taskId}`);

    alert(`Viewing details for: ${tasks.find(t => t.id === taskId)?.title}`);

  };



  const handleViewAllTasks = () => {

    navigate('/tenantMyTasks');

  };



  const handleHelp = () => {

    console.log('Opening help support...');

    alert('Support team has been notified. We\'ll contact you shortly!');

  };



  return (

    <div className="min-h-screen bg-gray-50">

      <TenantSidebar activePage="overview" onNavigate={onNavigate} />

      <TenantTopbar />



      <main className="ml-48 pt-14 p-6">

        <h1 className="text-xl font-bold text-gray-900 mb-1">Tenant Reliability Dashboard</h1>

        <p className="text-[13px] text-gray-500 mb-6">Maintain your integrity score and view your monitoring status.</p>



        {/* Main Grid */}

        <div className="grid grid-cols-[30%_70%] gap-5 mb-5">

          {/* Progress Overview */}

          <div className="bg-white border border-gray-100 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-[15px] font-bold text-gray-900">Progress Overview</h2>

              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">

                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#9ca3af" strokeWidth="1.8" />

                <path d="M8 17V13M12 17V9M16 17V11" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />

              </svg>

            </div>

            {/* Participation Rate */}

            <div className="mb-5">

              <div className="flex items-center justify-between mb-2">

                <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">Participation Rate</span>

                <span className="text-2xl font-bold text-blue-600">85%</span>

              </div>

              <div className="w-full h-2.5 bg-gray-100 rounded-full">

                <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: "85%" }} />

              </div>

              <p className="text-[12px] text-gray-500 mt-2">Your participation rate is 85%, higher than the building average.</p>

            </div>



            {/* Highlight Box */}

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4 flex items-start gap-2">

              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="mt-0.5 shrink-0">

                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              </svg>

              <p className="text-[12px] text-gray-700">

                Your participation rate is <span className="font-bold text-blue-600">85% higher</span> than the building average.

              </p>

            </div>



            <p className="text-[13px] text-gray-600 italic mb-5">"You're making great progress! Keep it up!"</p>



            {/* Risk Legend */}

            <div className="flex flex-col gap-2">

              {[

                { label: "HIGH RISK", desc: "Tenants showing significant behavioral decline requiring immediate attention.", color: "text-red-500" },

                { label: "MODERATE", desc: "Early warning signals detected. Monitoring recommended.", color: "text-amber-500" },

                { label: "RESOLVED (TODAY)", desc: "Issues addressed and stabilized.", color: "text-green-600" },

              ].map((r) => (

                <div key={r.label}>

                  <span className={`text-[10px] font-bold ${r.color}`}>{r.label}</span>

                  <p className="text-[11px] text-gray-400">{r.desc}</p>

                </div>

              ))}

            </div>

          </div>



          {/* Daily Tasks */}

          <div className="bg-white border border-gray-100 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-[15px] font-bold text-gray-900">Daily Tasks</h2>

              <button

                onClick={handleViewAllTasks}

                className="text-[12px] text-blue-500 font-medium hover:underline"

              >

                View All Tasks

              </button>

            </div>



            <div className="flex flex-col gap-4">

              {tasks.map((task) => (

                <div key={task.id} className={`flex items-center gap-4 p-3 rounded-xl ${task.completed ? "opacity-70" : ""} bg-gray-100`}>

                  <div className="shrink-0">{task.icon}</div>

                  <div className="flex-1 min-w-0">

                    <div className={`text-[13px] font-semibold text-gray-800 ${task.completed ? "line-through text-gray-400" : ""}`}>

                      {task.title}

                    </div>

                    {task.status && (

                      <div className="flex items-center gap-1.5 mt-0.5">

                        <span className={`w-1.5 h-1.5 rounded-full ${task.statusDot}`} />

                        <span className={`text-[10px] font-bold ${task.statusColor}`}>{task.status}</span>

                      </div>

                    )}

                  </div>

                  <div className="flex items-center gap-2 shrink-0">

                    <button

                      onClick={() => handleTaskComplete(task.id)}

                      disabled={task.completed}

                      className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${task.completed

                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-50"

                        : "bg-blue-600 text-white hover:bg-blue-700"

                        }`}

                    >

                      Mark Complete

                    </button>

                    <button

                      onClick={() => handleTaskDetails(task.id)}

                      className="px-3 py-1.5 rounded-lg text-[11px] font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"

                    >

                      View Details

                    </button>

                  </div>

                </div>

              ))}

            </div>



            {/* Tip */}

            <div className="mt-5 flex items-start gap-2 text-[12px] text-gray-500">

              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-gray-400">

                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />

                <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

                <circle cx="12" cy="16" r="1" fill="currentColor" />

              </svg>

              Review upcoming tasks to stay on track and maintain your cycle.

            </div>

          </div>

        </div>

        {/* Help Button */}

        <button className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 text-white text-[13px] font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">

          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">

            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />

            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="12" cy="17" r="1" fill="white" />

          </svg>

          Need Help with task?Contact Support

        </button>

        {/* Warning Banner */}

        {/* <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">

          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="shrink-0 mt-0.5">

            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#f59e0b" strokeWidth="1.8" />

            <line x1="12" y1="9" x2="12" y2="13" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="12" cy="17" r="1" fill="#f59e0b" />

          </svg>

          <div>

            <div className="text-[13px] font-bold text-amber-700 mb-0.5">Participation Decline Detected</div>

            <p className="text-[12px] text-amber-700">

              Your activity has decreased by 12% this week compared to your average.{" "}

              <span className="font-bold">Why this matters:</span>{" "}

              Reduced engagement often precedes missed payments and affects your overall integrity score.

            </p>

          </div>

        </div> */}

      </main>

    </div>

  );

}