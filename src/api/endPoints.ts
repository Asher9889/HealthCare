export const endPoints = {
    contactAdvisor: {
        url: () => `/contact/insurance-advisor`,
        method: 'POST',
    },
    quickEmiCheck: {
        url: () => `/contact/quick-emi-check`,
        method: 'POST',
    },
    callbackForm: {
        url: `/contact/request-callback`,
        method: 'POST',
    },
    quickDoctorConnect: {
        url: () => `/contact/quick-doctor-connect`,
        method: 'POST',
    },
    getAllBlogs: {
        url: `/blogs`,
        method: 'GET',
    },
    getBlog: {
        url: "/blogs/:slug",
        method: "GET"
    },
    onboardingDoctor: {
        url: () => `/contact/onboarding-doctor`,
        method: 'POST',
    },
}
