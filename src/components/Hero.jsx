import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-linear-to-r from-red via-rose to-maroon text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Powering Community Action <br />
              At National Scale
            </h2>
            <p className="mt-6 text-white/90 max-w-xl">
              SocialServe connects volunteers, organizers, NGOs, and
              institutions through a unified system to plan, execute, and track
              social development initiatives.
            </p>
          </div>

          <img
            src="https://media.istockphoto.com/id/1190692184/photo/latin-american-volunteers-working-hard-at-a-charity-construction-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=RM4y9BdCzVYjWumefCWC5I0vtSLrSb8COYm-hNGJxEk="
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
