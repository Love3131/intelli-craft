import {
  Activity,
  Download,
  FileText,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <section>

      {/* PAGE INTRO */}
      <div>
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
          Business Overview
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          EruDigm Business Dashboard
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Monitor website activity, digital resources, customer enquiries and
          platform operations from one secure workspace.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Users size={20} />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Visitors
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Vercel Analytics
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Live website traffic
          </p>
        </div>

        <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <Download size={20} />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Downloads
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            0
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Tracking foundation ready
          </p>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <Mail size={20} />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Contact Leads
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Coming Soon
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Customer enquiries
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-100 bg-white p-7 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
            <FileText size={20} />
          </div>

          <p className="mt-6 text-sm font-semibold text-gray-500">
            Resources
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            0
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Digital resources
          </p>
        </div>

      </div>

      {/* FOUNDATION */}
      <div className="mt-10 grid gap-6 xl:grid-cols-2">

        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Admin Foundation
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Secure management environment active
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Authentication, profile access, role-based identity and
                database security are connected successfully.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Activity size={22} />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Phase 2
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Resource management foundation ready
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Categories, resources, version history and download-event
                tables are now available in the EruDigm database.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}