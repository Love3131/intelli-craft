import Link from "next/link";

const physicalLoop = [
  {
    number: "01",
    title: "Perceive",
    text: "Cameras, depth sensors, microphones, force sensors and other inputs help the system observe the physical environment.",
  },
  {
    number: "02",
    title: "Understand",
    text: "AI interprets objects, people, spatial relationships, instructions and the current state of the environment.",
  },
  {
    number: "03",
    title: "Plan",
    text: "The system determines useful steps for completing the physical objective.",
  },
  {
    number: "04",
    title: "Act",
    text: "The plan is translated into physical actions such as movement, grasping, navigation or manipulation.",
  },
  {
    number: "05",
    title: "Observe",
    text: "Sensors reveal what actually happened after the action.",
  },
  {
    number: "06",
    title: "Adapt",
    text: "The system adjusts when objects move, conditions change or the previous action does not work as expected.",
  },
];

const technologies = [
  {
    title: "Vision-Language Models",
    short: "SEE + UNDERSTAND",
    text: "Combine visual perception with language understanding so a system can reason about what it sees.",
  },
  {
    title: "Vision-Language-Action Models",
    short: "SEE + UNDERSTAND + ACT",
    text: "Extend multimodal models so their outputs can represent or control physical actions.",
  },
  {
    title: "Embodied Reasoning",
    short: "REASON IN SPACE",
    text: "Helps systems understand objects, spatial relationships, physical constraints and how actions affect the environment.",
  },
  {
    title: "World Models",
    short: "PREDICT",
    text: "Represent aspects of how an environment behaves so a system can reason about possible future states and consequences.",
  },
  {
    title: "Simulation",
    short: "PRACTICE",
    text: "Virtual environments can provide training and testing opportunities before behavior is transferred into the physical world.",
  },
  {
    title: "On-Device AI",
    short: "RUN LOCALLY",
    text: "Local models can reduce dependence on network connectivity and latency for time-sensitive robotic behavior.",
  },
];

const applications = [
  {
    title: "Warehouse Robotics",
    description:
      "Robots can perceive changing inventory, navigate dynamic spaces and manipulate objects rather than following only fixed repetitive paths.",
  },
  {
    title: "Manufacturing",
    description:
      "AI-powered robots can support inspection, manipulation, assembly and adaptive production tasks in less structured environments.",
  },
  {
    title: "Humanoid Robots",
    description:
      "General-purpose humanoid platforms aim to combine mobility, manipulation, language interaction and reasoning in environments designed for people.",
  },
  {
    title: "Autonomous Vehicles",
    description:
      "Vehicles must continuously perceive the environment, predict behavior, plan trajectories and execute physical control decisions.",
  },
  {
    title: "Healthcare Robotics",
    description:
      "Robotic systems can support logistics, assistance and specialized clinical workflows where physical interaction matters.",
  },
  {
    title: "Drones & Field Robotics",
    description:
      "Autonomous systems can inspect infrastructure, map environments, monitor sites and operate where human access is difficult.",
  },
];

const challenges = [
  {
    title: "Physical Safety",
    text: "A wrong text answer is inconvenient. A wrong physical action can damage equipment or injure someone.",
  },
  {
    title: "Real-World Variability",
    text: "Lighting, surfaces, objects, people and environments change constantly outside controlled demonstrations.",
  },
  {
    title: "Dexterity",
    text: "Tasks humans perform effortlessly can require extremely precise sensing and motor control.",
  },
  {
    title: "Latency",
    text: "Physical systems often need to perceive and respond quickly enough for safe real-time interaction.",
  },
  {
    title: "Data",
    text: "Collecting diverse real-world robotic demonstrations can be much harder and more expensive than collecting digital data.",
  },
  {
    title: "Generalization",
    text: "A robot that succeeds in one environment must still cope with unfamiliar objects, layouts and situations.",
  },
];

const safetyLayers = [
  "High-level semantic understanding of whether a requested action is appropriate.",
  "Task planning that respects defined operating constraints.",
  "Low-level controllers for collision avoidance, stability and force limits.",
  "Environment and human detection through sensors.",
  "Emergency stopping and fail-safe behavior.",
  "Human supervision for high-risk or uncertain operations.",
  "Testing in simulation and controlled environments before wider deployment.",
  "Continuous monitoring of real-world performance and failures.",
];

export default function PhysicalAIArticle() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/resources/blog"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Back to EruDigm Insights
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  Robotics
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  Physical AI
                </span>

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600">
                  12 min read
                </span>
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
                Physical AI
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  When Intelligence Gets a Body
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-600">
                Generative AI changed what computers can understand and create.
                Physical AI extends intelligence into machines that must
                perceive, reason and act safely in the real world.
              </p>

              <a
                href="#physical-loop"
                className="mt-9 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
              >
                Explore Physical AI ↓
              </a>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                From Digital Intelligence to Physical Action
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-bold text-gray-500">
                    DIGITAL AI
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    Text · Images · Code · Research
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-600">↓</div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-bold text-blue-600">
                    EMBODIED REASONING
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    Understand objects, space and physical goals
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-600">↓</div>

                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
                  <p className="text-xs font-bold text-blue-100">
                    PHYSICAL AI
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    Perceive → Reason → Plan → Move → Adapt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          The Core Idea
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Physical AI closes the gap between understanding the world and acting
          inside it.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">
          <p>
            Most of the recent AI revolution has happened in the digital
            environment. Models generate text, analyze documents, write code,
            understand images and interact with software.
          </p>

          <p>
            A physical system has a harder problem. It must understand an
            environment that continuously changes, reason about three-
            dimensional space and translate decisions into movements that obey
            the laws of physics.
          </p>

          <p>
            Physical AI is therefore not simply “putting ChatGPT inside a
            robot.” It combines perception, multimodal reasoning, planning,
            control, sensors, actuators and continuous feedback from the real
            world.
          </p>
        </div>
      </section>

      {/* ROBOT VS PHYSICAL AI */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The Evolution
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Traditional robot vs AI-powered robot vs Physical AI
            </h2>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <span className="text-sm font-bold text-gray-500">
                TRADITIONAL ROBOT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Programmed behavior
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Excellent at repetitive tasks when the environment, objects and
                sequence are tightly controlled.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm font-semibold text-gray-700">
                Detect position → execute programmed motion → repeat
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <span className="text-sm font-bold text-blue-600">
                AI-POWERED ROBOT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Perception + learned capabilities
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Machine learning can improve perception, recognition,
                prediction and control beyond rigid rules.
              </p>

              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm font-semibold text-blue-900">
                Sense → classify/predict → execute appropriate behavior
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-xl">
              <span className="text-sm font-bold text-cyan-700">
                PHYSICAL AI
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                General reasoning + physical action
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Emerging systems combine broad multimodal understanding with
                planning, adaptation and increasingly general physical skills.
              </p>

              <div className="mt-6 rounded-xl bg-cyan-50 p-4 text-sm font-semibold text-cyan-900">
                Goal → perceive → reason → act → observe → adapt
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOOP */}
      <section
        id="physical-loop"
        className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            The Physical Intelligence Loop
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Perceive → Understand → Plan → Act → Observe → Adapt
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Physical intelligence is a continuous closed loop because every
            action changes the environment the system must understand next.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {physicalLoop.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VLA */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Vision-Language-Action
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                From seeing and understanding to controlling movement
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Vision-language-action models extend multimodal AI by adding
                physical actions to the output space. Instead of only
                describing what is visible, a VLA can help translate visual
                observations and language instructions into robotic control.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                This is one of the important architectural shifts behind more
                general-purpose robotic systems.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-bold text-blue-600">
                    VISION
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    What does the robot see?
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-bold text-blue-600">
                    LANGUAGE
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    What is the instruction?
                  </p>
                </div>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-blue-600 p-5 text-center text-white">
                <p className="text-sm font-bold text-blue-100">
                  VLA MODEL
                </p>
                <p className="mt-2 font-bold">
                  Interpret the situation and produce physical action
                </p>
              </div>

              <div className="py-4 text-center text-xl text-blue-600">↓</div>

              <div className="rounded-2xl bg-slate-950 p-5 text-center text-white">
                <p className="text-sm font-bold text-cyan-300">
                  ROBOT CONTROL
                </p>
                <p className="mt-2 font-bold">
                  Move · Grasp · Navigate · Manipulate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMBODIED REASONING */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Embodied Reasoning
        </span>

        <h2 className="mt-4 max-w-4xl text-4xl font-bold">
          Knowing what an object is is different from knowing how to interact
          with it.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          A physical system needs spatial understanding: where objects are,
          which surfaces can be touched, how an item might be grasped, whether
          a path is clear and what sequence of movements can accomplish the
          goal.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Perception",
              "That is a mug with a handle.",
            ],
            [
              "Reasoning",
              "The handle provides a useful grasp point.",
            ],
            [
              "Action",
              "Approach safely, grasp the handle and lift.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-200 bg-slate-50 p-7"
            >
              <span className="text-sm font-bold text-blue-600">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-xl font-bold">{title}</h3>

              <p className="mt-4 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Technology Stack
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Technologies pushing Physical AI forward
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  {item.short}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULATION */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Simulation
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Practice before touching the real world
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Simulation can generate experience, test policies and expose
              systems to varied scenarios without requiring every experiment
              to happen on physical hardware.
            </p>

            <div className="mt-7 rounded-2xl bg-slate-50 p-5 font-semibold text-gray-700">
              Virtual environment → training/testing → validation → physical
              deployment
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Reality Gap
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              The real world still gets the final vote
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Simulation cannot perfectly reproduce friction, lighting,
              deformable objects, sensor noise, people and every unexpected
              condition. Real-world evaluation remains essential.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Real-World Applications
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Where Physical AI could create value
            </h2>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {applications.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMANOIDS */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Why Humanoids?
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Much of the physical world was designed around the human body.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Doors, stairs, shelves, tools, workstations and vehicles were largely
          designed for human reach, movement and manipulation. A humanoid form
          can therefore offer one potential route toward robots that operate in
          existing human environments without redesigning every workplace.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            ["Mobility", "Move through environments built for people."],
            ["Manipulation", "Use arms and hands to interact with common objects."],
            ["Reach", "Access shelves, tools and work areas at human heights."],
            ["Collaboration", "Share environments and tasks with people."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-6"
            >
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The Hard Part
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              The physical world is far less forgiving than a chat window
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Safety Architecture
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          AI reasoning should not be the only safety layer.
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          Physical systems require layered safety. High-level AI may reason
          about whether an action is appropriate, while lower-level controllers
          enforce physical constraints such as collision avoidance, stability
          and force limits.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {safetyLayers.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-slate-50 p-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </span>

              <p className="pt-1 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL + PHYSICAL AGENTS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Agentic AI Meets Robotics
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              A physical agent can use both digital and physical tools
            </h2>
          </div>

          <div className="mt-12 rounded-3xl border border-blue-100 bg-white p-8 shadow-xl lg:p-12">
            <div className="rounded-2xl bg-slate-950 p-6 text-center text-white">
              <p className="text-sm font-bold text-cyan-300">
                GOAL
              </p>
              <p className="mt-2 text-xl font-bold">
                Sort these objects according to local recycling rules
              </p>
            </div>

            <div className="py-4 text-center text-xl text-blue-600">↓</div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <p className="font-bold text-blue-600">Digital Tool</p>
                <p className="mt-2 text-sm text-gray-600">
                  Look up local rules
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <p className="font-bold text-blue-600">Perception</p>
                <p className="mt-2 text-sm text-gray-600">
                  Identify physical objects
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <p className="font-bold text-blue-600">Physical Action</p>
                <p className="mt-2 text-sm text-gray-600">
                  Pick and place correctly
                </p>
              </div>
            </div>

            <div className="py-4 text-center text-xl text-blue-600">↓</div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-center font-bold text-white">
              Observe result → adapt if the environment changes
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          What Comes Next
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          AI is beginning to move from screens into the environments around us.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          The important shift is not simply that robots are becoming more
          capable. AI systems are increasingly learning to connect language,
          vision, spatial reasoning, planning and physical control within one
          continuous loop.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          The biggest challenge will be turning impressive demonstrations into
          systems that are reliable, economically useful and safe across the
          unpredictable conditions of the real world.
        </p>
      </section>

      {/* NEXT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Continue EruDigm Insights
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Physical agents need intelligence. Multi-agent systems explore how
            several intelligent specialists can work together.
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/blog/multi-agent-ai-systems"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Multi-Agent AI Systems →
            </Link>

            <Link
              href="/resources/blog"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
            >
              EruDigm Insights
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}