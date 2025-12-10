import DoctorApplyCTA from "./doctor-apply-cta/DoctorApplyCTA";
import DoctorTestimonials from "./doctor-testimonials/DoctorTestimonials";
import FAQ from "./faq/FAQ";
import Hero from "./hero/Hero";
import WhyJoin from "./why-join/WhyJoin";

const DoctorsOnboarding = () => {
    return (
        <section className="" >
            <div className="" >
                <Hero />
                <WhyJoin />
                <DoctorTestimonials />
                <FAQ />
                <DoctorApplyCTA />
            </div>
        </section>
    );
}

export default DoctorsOnboarding;