"use client";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Briefcase,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Gavel,
  HandHelping,
} from "lucide-react";

export default function AboutPage() {
  const impactStats = [
    { label: "Years in Advocacy", value: 10 },
    { label: "Cases Resolved", value: 150 },
    { label: "Children Empowered", value: 890 },
  ];
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    // Animation will complete in exactly 5 seconds
    const ANIMATION_DURATION = 5000; // 5 seconds in milliseconds
    const FRAME_RATE = 60; // Updates per second
    const TOTAL_FRAMES = (ANIMATION_DURATION / 1000) * FRAME_RATE;

    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      setCounts(
        impactStats.map((stat) => {
          // Calculate progress as a percentage (0 to 1)
          const progress = frame / TOTAL_FRAMES;

          // Use easeOutQuad easing function for smoother animation at the end
          const easedProgress = 1 - Math.pow(1 - progress, 2);

          // Calculate current value based on progress
          return Math.min(Math.floor(stat.value * easedProgress), stat.value);
        })
      );

      // Stop the animation when complete
      if (frame >= TOTAL_FRAMES) {
        clearInterval(interval);
        // Ensure final values are exact
        setCounts(impactStats.map((stat) => stat.value));
      }
    }, 1000 / FRAME_RATE);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-indigo-50">
      <PageHeader
        title="About Us"
        subtitle="Driven by justice, compassion, and the fight for human dignity."
      />

      {/* Organisation Overview */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 font-head">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed font-body">
            Federico & Co is a human rights-focused legal organisation
            advocating against child and women trafficking. With deep roots in
            justice and community support, we provide legal services,
            empowerment programmes, and awareness campaigns that have touched
            hundreds of lives.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/img.jpeg"
            alt="Federico and Co in action"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Founder Story */}
      <section className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl">
        <div className="md:w-1/2">
          <img
            src="/images/image.jpg"
            alt="Andrew Federico"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 font-head">
            Meet Andrew Federico
          </h2>
          <p className="text-gray-700 leading-relaxed font-body">
            Andrew Federico is a lawyer, activist, and relentless advocate for
            vulnerable populations. His journey started in law, but his mission
            evolved into rescuing, rehabilitating, and empowering victims of
            trafficking. Andrew’s legal expertise and passion have helped shape
            policies and directly change lives.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-indigo-950 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 font-head">
              What We Do
            </h2>
            <p className="text-indigo-200 max-w-2xl mx-auto text-lg font-body">
              From legal representation to empowerment programmes, our work is
              united by one mission — restoring dignity and justice to the lives
              we touch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/legal.webp"
                alt="Legal Aid"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Legal Aid & Representation
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                We provide free legal representation to victims of trafficking
                and gender-based violence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/advocacy.webp"
                alt="Advocacy"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Advocacy & Human Rights Campaigns
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                We lead impactful campaigns that raise awareness and drive
                change on key human rights issues.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <img
                src="/images/support.webp"
                alt="Victim Support"
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2 font-head">
                Victim Support & Rehabilitation
              </h3>
              <p className="text-gray-600 mb-4 font-body">
                We offer shelter, counselling, and rehabilitation services to
                help survivors rebuild their lives.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 font-head">
            <Link
              href="/services"
              className="inline-block bg-indigo-700 text-white font-semibold px-8 py-3 rounded-3xl hover:bg-indigo-600 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-indigo-950 text-white rounded-xl shadow p-8 flex flex-col items-start gap-4 border-b-4 border-indigo-600">
            <ShieldCheck className="text-indigo-400 w-8 h-8" />
            <h3 className="text-2xl font-bold font-head">Our Mission</h3>
            <p className="leading-relaxed text-lg font-body">
              To protect the vulnerable and give voice to the silenced through
              legal action, advocacy, and empowerment.
            </p>
          </div>
          <div className="bg-indigo-950 text-white rounded-xl shadow p-8 flex flex-col items-start gap-4 border-b-4 border-indigo-600">
            <Target className="text-indigo-400 w-8 h-8" />
            <h3 className="text-2xl font-bold font-head">Our Vision</h3>
            <p className="leading-relaxed text-lg font-body">
              A world free from exploitation, where every child and woman lives
              with dignity, opportunity, and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h2 className="text-3xl font-bold text-indigo-900 mb-12 font-head">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <Users className="mx-auto text-indigo-700 w-12 h-12 mb-2" />
              <p className="text-4xl font-extrabold text-indigo-900 font-head">
                {counts[0]}+
              </p>
              <p className="text-gray-700 font-body text-lg">
                {impactStats[0].label}
              </p>
              <p></p>
            </div>
            <div>
              <Gavel className="mx-auto text-indigo-700 w-12 h-12 mb-2" />
              <p className="text-4xl font-extrabold text-indigo-900">
                {" "}
                {counts[1]}+
              </p>
              <p className="text-gray-700">{impactStats[1].label}</p>
            </div>
            <div>
              <HandHelping className="mx-auto text-indigo-700 w-12 h-12 mb-2" />
              <p className="text-4xl font-extrabold text-indigo-900">
                {" "}
                {counts[2]}+
              </p>
              <p className="text-gray-700">{impactStats[2].label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className=" py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2 font-head">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow p-6 border-b-4 border-indigo-600 flex flex-col gap-3">
              <Briefcase className="text-indigo-700 w-8 h-8" />
              <h4 className="text-xl font-semibold text-indigo-800 font-head">
                Justice
              </h4>
              <p className="text-gray-600 font-body">
                We pursue fairness and legal redress for all.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border-b-4 border-indigo-600 flex flex-col gap-3">
              <HeartHandshake className="text-indigo-700 w-8 h-8" />
              <h4 className="text-xl font-semibold text-indigo-800 font-head">
                Empathy
              </h4>
              <p className="text-gray-600 font-body">
                We listen, support, and understand every story.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border-b-4 border-indigo-600 flex flex-col gap-3">
              <Lightbulb className="text-indigo-700 w-8 h-8" />
              <h4 className="text-xl font-semibold text-indigo-800 font-head">
                Transparency
              </h4>
              <p className="text-gray-600 font-body">
                We are open, honest, and accountable.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border-b-4 border-indigo-600 flex flex-col gap-3">
              <ShieldCheck className="text-indigo-700 w-8 h-8" />
              <h4 className="text-xl font-semibold text-indigo-800 font-head">
                Courage
              </h4>
              <p className="text-gray-600 font-body">
                We face injustice with bold action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 font-head">
            Join Us in Making a Difference
          </h2>
          <p className="mb-6 max-w-xl mx-auto text-lg font-body">
            Whether it’s through volunteering, supporting a campaign, or legal
            advocacy — your role matters.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-indigo-900 font-semibold px-8 py-3 rounded-3xl hover:bg-indigo-100 transition font-head"
            >
              Contact Us
            </Link>
            <Link
              href="/get-involved"
              className="bg-indigo-950 text-white font-semibold px-8 py-3 rounded-3xl hover:bg-indigo-800 transition font-head"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
