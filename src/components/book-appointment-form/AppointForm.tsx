import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DiseasesInput from "../diseases/DiseasesInput"
import { Checkbox, Input, Label, Spinner, Textarea } from "../ui"
import { toast } from "sonner"

const uri = import.meta.env.VITE_API_BASE_URL

type AppointFormProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const AppointForm = ({ open, setOpen }: AppointFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    isWhatsaapConnect: false,
    email: "",
    healthConcern: "",
    condition: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // ✅ Close modal on ESC press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [setOpen])

  // ✅ Handle text & textarea inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // ✅ Handle checkbox
  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      isWhatsaapConnect: !!checked,
    }))
  }

  // ✅ Handle diseases dropdown
  const handleHealthConcern = (value: string) => {
    setFormData((prev) => ({ ...prev, healthConcern: value }))
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Basic Validations
      if (!formData.fullName || formData.fullName.trim().length < 4)
        return toast.error("Full Name should be at least 4 characters.")

      if (!formData.mobileNumber)
        return toast.error("Mobile Number is required.")

      if (!/^[0-9]{10}$/.test(formData.mobileNumber))
        return toast.error("Mobile Number must be exactly 10 digits.")

      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        return toast.error("Enter a valid email address.")

      if (!formData.healthConcern)
        return toast.error("Please select your health concern.")

      if (isLoading) return
      setIsLoading(true)

      try {
        const res = await fetch(`${uri}/user/book-appointment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        const result = await res.json()
        if (!result.status) {
          return toast.error(
            "Failed to book your appointment. Please try again after 1 minute."
          )
        }

        toast.success(result.message)
        setOpen(false)
      } catch (err) {
        console.error("❌ API Error:", err)
        toast.error("Something went wrong. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    },
    [formData, isLoading, setOpen]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            key="modal-content"
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-lg sm:max-w-xl w-full m-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center py-3 px-4 bg-(--primary-bg-color)">
              <div className="text-white flex flex-col justify-center items-center gap-1">
                <h3 className="font-semibold text-2xl">
                  Book Your FREE Consultation
                </h3>
                <p className="text-sm opacity-90">
                  Get expert advice from experienced doctors. 100% confidential
                  and secure.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 transition"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 space-y-4 text-gray-700 max-h-[80vh] overflow-y-auto"
            >
              {/* Full Name */}
              <div className="space-y-1">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  required
                  minLength={4}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                <Label htmlFor="mobileNumber">
                  Mobile Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              {/* WhatsApp Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isWhatsaapConnect"
                  checked={formData.isWhatsaapConnect}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <Label htmlFor="isWhatsaapConnect" className="text-sm">
                  Yes, you can also contact me via WhatsApp
                </Label>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Health Concern */}
              <div className="space-y-1">
                <Label>
                  Select Your Health Concern{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <DiseasesInput
                  text="Select concern"
                  onChange={handleHealthConcern}
                />
              </div>

              {/* Condition */}
              <div className="space-y-1">
                <Label htmlFor="condition">Treatment/Condition</Label>
                <Textarea
                  id="condition"
                  placeholder="e.g. Piles, Hernia, Kidney Stones"
                  className="resize-none"
                  value={formData.condition}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 rounded-md font-semibold inline-flex items-center gap-x-2 text-md bg-(--orange-button-color) text-white disabled:opacity-50 disabled:pointer-events-none transition-all duration-500"
                >
                  {isLoading ? <Spinner /> : "Book free appointment"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AppointForm
