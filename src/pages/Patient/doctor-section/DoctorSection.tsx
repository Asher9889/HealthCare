import DoctorInfo from "./doctor-card/DoctorCard";
// import Hero from "../../our-company/doctors-onboarding/hero/Hero";

export default function DoctorSection() {
  return (
    <section className="bg-slate-50 py-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Expert Surgeons
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Highly qualified and experienced specialists dedicated to providing the best medical care with precision and compassion.
          </p>
        </div>
        <DoctorInfo />
      </div>
    </section>
  );
}
