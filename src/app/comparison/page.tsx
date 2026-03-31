import { Navbar } from "@/components/ui/navbar";
import { Check, Minus } from "lucide-react";

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900 relative overflow-hidden">
      {/* Background gradient matching pricing page */}
      <div className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(circle at center, #206ce8 0%, transparent 70%)",
             opacity: 0.6,
             mixBlendMode: "multiply",
           }}
      />

      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>
      
      <div className="pt-[120px] pb-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How Nexire compares</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why modern recruiters choose Nexire over traditional CV databases and expensive enterprise sourcing tools.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-200">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/50">
                <th className="py-4 px-6 font-semibold w-1/4 text-gray-900">Tool</th>
                <th className="py-4 px-6 font-semibold w-1/6 text-gray-900">Type</th>
                <th className="py-4 px-6 font-semibold w-1/6 text-gray-900">Typical Cost (India)</th>
                <th className="py-4 px-6 font-semibold w-1/4 text-gray-900">Data Source</th>
                <th className="py-4 px-6 font-semibold w-1/6 text-gray-900">Outreach Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              <tr className="bg-blue-50/50 hover:bg-blue-50 transition-colors group">
                <td className="py-4 px-6 font-semibold text-blue-600">Nexire Starter</td>
                <td className="py-4 px-6 text-gray-700">Outbound sourcing</td>
                <td className="py-4 px-6 font-bold text-gray-900">₹5,999 /mo</td>
                <td className="py-4 px-6 text-gray-700">300M+ Public profiles</td>
                <td className="py-4 px-6 text-gray-700">Verified email + phone</td>
              </tr>
              <tr className="bg-blue-50/80 hover:bg-blue-100/50 transition-colors group border-b-2 border-blue-100">
                <td className="py-4 px-6 font-semibold text-blue-600 flex items-center gap-2">
                  Nexire Growth
                  <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold">Popular</span>
                </td>
                <td className="py-4 px-6 text-gray-700">Outbound sourcing</td>
                <td className="py-4 px-6 font-bold text-gray-900">₹11,999 /mo</td>
                <td className="py-4 px-6 text-gray-700">300M+ Public profiles</td>
                <td className="py-4 px-6 text-gray-700">More searches + contacts (2 seats)</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    Naukri Resdex Lite
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Inbound CV DB</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    ~₹8,000 (₹4k/15 days)
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Active CVs uploaded</td>
                <td className="py-4 px-6 text-gray-500">Email from portal</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    Naukri Resdex Full
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Inbound CV DB</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    ₹18,000–₹25,000+ /mo
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Large active CV DB</td>
                <td className="py-4 px-6 text-gray-500">Mass email</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    LinkedIn Recruiter Lite
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Passive sourcing</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    ~₹8,000–₹10,000 /mo
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">LinkedIn network</td>
                <td className="py-4 px-6 text-gray-500">InMails (30/mo)</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    LinkedIn Recruiter
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Passive sourcing</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://cutshort.io/blog/hiring/naukri-resdex-linkedin-and-recruitment-agency-pricing-and-trends-in-india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    ₹15,000–₹20,000+ /mo
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">LinkedIn network</td>
                <td className="py-4 px-6 text-gray-500">InMails (150/mo), bulk</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://recruiter.shine.com/online-package/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    Shine Smart Search
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Inbound CV DB + jobs</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://recruiter.shine.com/online-package/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    ₹38,991+ /pack
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Large Indian CV DB</td>
                <td className="py-4 px-6 text-gray-500">Bulk emails, downloads</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://recruiter.foundit.in/edge/user-management/planDashboard/?plan=custom" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    Foundit (Monster)
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Inbound + passive, AI</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://recruiter.foundit.in/edge/user-management/planDashboard/?plan=custom" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    Custom
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">160M+ profiles</td>
                <td className="py-4 px-6 text-gray-500">AI-generated campaigns</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">
                  <a href="https://cutshort.io/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    Cutshort (Startup)
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Tech talent SaaS</td>
                <td className="py-4 px-6 text-gray-500">
                  <a href="https://cutshort.io/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                    ~₹12,970 /mo
                  </a>
                </td>
                <td className="py-4 px-6 text-gray-500">Tech talent pool + AI</td>
                <td className="py-4 px-6 text-gray-500">Platform messaging</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 shadow-sm rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Why choose Nexire?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 mb-1">Direct Contact Details</strong>
                  <span className="text-gray-600 text-sm">Unlike LinkedIn Recruiter, we provide direct Indian mobile numbers and verified work emails. No more waiting for InMail responses.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 mb-1">Passive Candidate Focus</strong>
                  <span className="text-gray-600 text-sm">Naukri and Shine focus on active job seekers who are already being spammed. We help you find the hidden gems who aren't looking.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 mb-1">Transparent Pricing</strong>
                  <span className="text-gray-600 text-sm">No opaque enterprise contracts or custom quotes. Clear credit allocations that roll over and make sense for your workflow.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-neutral-200 shadow-sm rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">The ROI Equation</h3>
            <div className="space-y-6">
              <p className="text-gray-600">
                Traditional agencies charge <strong className="text-gray-900">8.33% to 16.67%</strong> of CTC.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">1 placement on a ₹10L role</span>
                  <span className="text-xl font-bold text-gray-900">₹83,000 fee</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Nexire Growth (monthly)</span>
                  <span className="text-xl font-bold text-blue-600">₹11,999</span>
                </div>
                <div className="h-px bg-blue-200/50 w-full my-4"></div>
                <p className="text-sm text-gray-700 font-medium text-center">
                  Just ONE extra placement pays for over 6 months of Nexire Growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}