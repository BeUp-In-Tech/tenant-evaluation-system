import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import TenantSidebar from "../../component/tenantComponent/tenantSidebar.jsx";

import TenantTopbar from "../../component/tenantComponent/tenantTopbar.jsx";



const TOTAL_DAYS = 7;

const CURRENT_DAY = 1;

const CURRENT_STEP = 2;

const TOTAL_STEPS = 5;



export default function MyTasksPage({ onNavigate }) {

  const [response, setResponse] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();



  const progressPct = ((CURRENT_DAY - 1) / TOTAL_DAYS) * 100;



  const handleSubmit = () => {

    if (response.trim()) {

      setSubmitted(true);

      console.log('Task submitted:', response);

      alert('Task submitted successfully!');

    }

  };



  const handleSkipTask = () => {

    console.log('Task skipped');

    alert('Task skipped. You can complete it later.');

  };



  const handlePreviousTask = () => {

    console.log('Navigating to previous task');

    alert('No previous tasks available.');

  };



  const handleNextTask = () => {

    console.log('Navigating to next task');

    alert('Next task will be available after completing this one.');

  };



  const handleContactSupport = () => {

    console.log('Contacting support...');

    alert('Support team has been notified. We\'ll contact you shortly!');

  };



  return (

    <div className="min-h-screen bg-gray-50">

      <TenantSidebar activePage="my-tasks" onNavigate={onNavigate} />

      <TenantTopbar />



      <main className="ml-48 pt-14 p-6 flex justify-center">

        <div className="w-full max-w-2xl">

          {/* Header */}

          <h1 className="text-xl font-bold text-gray-900 mb-1">Integrity Cycle — 7-Day Check-In</h1>

          <p className="text-[13px] text-gray-500 mb-6">Complete your daily check-ins to maintain your Integrity Cycle.</p>



          {/* Progress Bar */}

          <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-5">

            <div className="flex items-center justify-between mb-3">

              <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">Check-In Progress</span>

              <div className="flex items-center gap-2">

                <span className="text-[12px] font-bold text-blue-600">Day {CURRENT_DAY} of {TOTAL_DAYS}</span>

                <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1">

                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24">

                    <circle cx="12" cy="12" r="9" stroke="#3b82f6" strokeWidth="1.8" />

                    <path d="M12 8v4" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" />

                  </svg>

                  <span className="text-[11px] font-semibold text-blue-600">Current Task</span>

                  <span className="text-[11px] text-blue-500">Step {CURRENT_STEP} of {TOTAL_STEPS}</span>

                </div>

              </div>

            </div>



            {/* Day progress */}

            <div className="relative w-full h-2.5 bg-gray-100 rounded-full mb-2">

              <div className="h-2.5 bg-blue-500 rounded-full transition-all" style={{ width: `${progressPct + 14}%` }} />

            </div>



            <div className="flex justify-between">

              {Array.from({ length: TOTAL_DAYS }, (_, i) => (

                <div key={i} className="flex flex-col items-center gap-1">

                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${i + 1 < CURRENT_DAY

                      ? "bg-blue-500 text-white"

                      : i + 1 === CURRENT_DAY

                        ? "bg-blue-600 text-white ring-2 ring-blue-200"

                        : "bg-gray-100 text-gray-400"

                    }`}>{i + 1}</div>

                </div>

              ))}

            </div>



            <p className="text-[11px] text-gray-400 mt-2">Your responses help maintain a stable and well-managed living environment.</p>

          </div>



          {/* Task Card */}

          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-5">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-[16px] font-bold text-gray-900">Morning Routine Check-In</h2>

              <div className="flex items-center gap-1.5 text-blue-500">

                <svg width="13" height="13" fill="none" viewBox="0 0 24 24">

                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />

                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

                </svg>

                <span className="text-[12px] font-semibold">In Progress</span>

              </div>

            </div>



            {/* Question */}

            <p className="text-[14px] text-gray-700 mb-3 leading-relaxed">

              Describe your typical morning routine in the lobby area. Which services do you use most frequently between 7:00 AM and 9:00 AM?

            </p>



            {/* Why it matters */}

            <div className="flex items-start gap-2 mb-4">

              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" className="shrink-0 mt-0.5 text-gray-400">

                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />

                <path d="M12 8v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

                <circle cx="12" cy="16" r="1" fill="currentColor" />

              </svg>

              <p className="text-[12px] text-gray-500">

                <span className="font-semibold">Why this matters:</span> This helps us understand peak usage times and improve service scheduling.

              </p>

            </div>



            {/* Deadline notice */}

            <div className="flex items-center gap-2 bg-blue-50 rounded-xl px-4 py-2.5 mb-5">

              <svg width="13" height="13" fill="none" viewBox="0 0 24 24">

                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round" />

              </svg>

              <p className="text-[12px] text-blue-700">

                This task is currently being worked on. Please complete by <span className="font-bold">5:00 PM today</span> to stay on track.

              </p>

            </div>



            {/* Text Area */}

            <div className="mb-4">

              <label className="block text-[12px] font-semibold text-gray-600 mb-2">Detailed Response</label>

              {submitted ? (

                <div className="w-full border border-green-200 bg-green-50 rounded-xl px-4 py-3 text-[13px] text-green-700 font-medium">

                  ✓ Answer submitted successfully!

                </div>

              ) : (

                <textarea

                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:bg-white transition-all resize-none bg-gray-50"

                  rows={5}

                  placeholder="I usually check my mailbox and grab a quick coffee..."

                  value={response}

                  onChange={(e) => setResponse(e.target.value)}

                />

              )}

              <p className="text-[11px] text-gray-400 mt-1.5">

                ✎ Provide a brief, clear response. Focus on key tasks you perform daily within the building.

              </p>

            </div>



            {/* Task Actions */}

            <div className="flex items-center justify-between">

              <button 

                onClick={handleSkipTask}

                className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 transition-all"

              >

                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">

                  <path d="M9 14l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

                  <path d="M5 10h11a4 4 0 010 8h-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

                </svg>

                Skip Task

              </button>

              <button

                onClick={handleSubmit}

                disabled={submitted}

                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${submitted

                    ? "bg-green-500 text-white cursor-default"

                    : "bg-blue-600 text-white hover:bg-blue-700"

                  }`}

              >

                {submitted ? "Submitted ✓" : "Submit Answer"}

                {!submitted && (

                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">

                    <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />

                    <polyline points="12 5 19 12 12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                )}

              </button>

            </div>

          </div>



          {/* Previous / Next */}

          <div className="flex items-center justify-between mb-5">

            <button 

              onClick={handlePreviousTask}

              className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-700 transition-all"

            >

              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">

                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

              </svg>

              Previous Task

            </button>

            <button 

              onClick={handleNextTask}

              className="flex items-center gap-1.5 text-[13px] text-blue-500 font-medium hover:text-blue-700 transition-all"

            >

              Next Task

              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">

                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

              </svg>

            </button>

          </div>



          {/* Support Banner */}

          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">

                <svg width="17" height="17" fill="none" viewBox="0 0 24 24">

                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#6b7280" strokeWidth="1.8" />

                </svg>

              </div>

              <div>

                <div className="text-[13px] font-semibold text-gray-800">Need help with this task?</div>

                <div className="text-[11px] text-gray-500">If you're unsure about instructions or experiencing issues, our building support team is available 24/7.</div>

              </div>

            </div>

            <button className="shrink-0 px-4 py-2 bg-blue-600 text-white text-[12px] font-semibold rounded-lg hover:bg-blue-700 transition-all">

              Contact Support

            </button>

          </div>

        </div>

      </main>

    </div>

  );

}