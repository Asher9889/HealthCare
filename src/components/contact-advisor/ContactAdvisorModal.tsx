import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner" // optional, if you use sonner for notifications

export default function ContactAdvisorModal({text, className}: {text: string, className?: string}) {
  const [open, setOpen] = React.useState(false)
  const [form, setForm] = React.useState({
    name: "",
    mobile: "",
    treatment: "",
  })
  const [errors, setErrors] = React.useState({
    mobile: ""
  })

  const validateMobile = (value: string) => {
    if (!/^\d*$/.test(value)) {
      return "Please enter only numbers"
    }
    if (value.length > 0 && value.length < 10) {
      return "Mobile number must be 10 digits"
    }
    return ""
  }

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    
    // Only update if the input is empty or contains only digits
    if (value === "" || /^\d*$/.test(value)) {
      setForm({ ...form, mobile: value })
      
      if (errors.mobile) {
        const error = validateMobile(value)
        setErrors({ ...errors, mobile: error })
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const mobileError = validateMobile(form.mobile)
    setErrors({ mobile: mobileError })

    // Check if there are any errors or empty fields
    if (mobileError || !form.name || !form.mobile) {
      if (!form.name || !form.mobile) {
        toast.error("Please fill all fields before submitting.")
      }
      return
    }

    // Additional validation for mobile number length
    if (form.mobile.length !== 10) {
      setErrors(prev => ({ ...prev, mobile: "Mobile number must be 10 digits" }))
      return
    }
    // Simulate form submission
    console.log("Form Data Submitted:", form)
    toast.success("Our advisor will contact you shortly!")

    // Reset form & close dialog
    setForm({ name: "", mobile: "", treatment: "" })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button className={`bg-(--orange-button-color) hover:opacity-90 text-white px-6 py-3 rounded-xl ${className}`}>
          { text }
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="sm:max-w-md bg-white rounded-2xl shadow-lg border border-(--sidebar-border-color)">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-(--text-primary)">
            Talk to Our Insurance Advisor
          </DialogTitle>
          <DialogDescription className="text-(--text-secondary)">
            Fill out the form and our advisor will reach out to assist you with your treatment & insurance claim process.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-(--text-primary)">Full Name</Label>
            <Input
              id="name"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="border border-(--sidebar-border-color)"
            />
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="mobile" className="text-(--text-primary)">Mobile Number</Label>
            </div>
            <Input
              id="mobile"
              required
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              placeholder="Enter 10-digit mobile number"
              value={form.mobile}
              onChange={handleMobileChange}
              onBlur={() => {
                const error = validateMobile(form.mobile)
                setErrors({ ...errors, mobile: error })
              }}
              className={`border ${errors.mobile ? 'border-red-500' : 'border-(--sidebar-border-color)'} focus-visible:ring-2 focus-visible:ring-offset-2`}
            />
            {errors.mobile && (
              <span className="text-sm text-red-500">{errors.mobile}</span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="treatment" className="text-(--text-primary)">Treatment / Surgery Name</Label>
            <Textarea
              id="treatment"
              placeholder="e.g., Fissure Surgery, Hernia Repair, etc."
              value={form.treatment}
              onChange={e => setForm({ ...form, treatment: e.target.value })}
              className="border border-(--sidebar-border-color)"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-(--primary-bg-color) text-white font-semibold py-2 rounded-xl hover:opacity-90"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
