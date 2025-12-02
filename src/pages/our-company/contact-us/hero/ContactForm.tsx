// src/components/contact/ContactForm.jsx
import {
  Input,
  Textarea,
  Label,
  Button,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui";
import { User, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl p-6 w-full"
    >
      <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
        Quick Contact Form
      </h3>

      <div className="space-y-4">

        {/* Name */}
        <div>
          <Label>Enter Your Name*</Label>
          <div className="flex items-center gap-2 bg-[var(--primary-bg-light-blue)] rounded-lg px-3">
            <User className="w-5 h-5 text-[var(--primary-bg-color)]" />
            <Input placeholder="Your full name" className="bg-transparent border-none shadow-none" />
          </div>
        </div>

        {/* Phone */}
        <div>
          <Label>Mobile Number*</Label>
          <div className="flex items-center gap-2 bg-[var(--primary-bg-light-blue)] rounded-lg px-3">
            <Phone className="w-5 h-5 text-[var(--primary-bg-color)]" />
            <Input placeholder="+91 •••••••••" className="bg-transparent border-none shadow-none" />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label>Email*</Label>
          <div className="flex items-center gap-2 bg-[var(--primary-bg-light-blue)] rounded-lg px-3">
            <Mail className="w-5 h-5 text-[var(--primary-bg-color)]" />
            <Input placeholder="name@example.com" className="bg-transparent border-none shadow-none" />
          </div>
        </div>

        {/* City */}
        <div>
          <Label>City</Label>
          <Select>
            <SelectTrigger className="bg-[var(--primary-bg-light-blue)] text-[var(--text-primary)]">
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="Indore">Indore</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Gurgaon">Gurgaon</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Remarks */}
        <div>
          <Label>Remarks / Comments</Label>
          <Textarea
            placeholder="Tell us about your concern"
            className="bg-[var(--primary-bg-light-blue)] border-none"
          />
        </div>

        <Button className="w-full bg-[var(--primary-bg-color)] hover:bg-blue-700 hover:scale-[0.98] transition">
          Submit Details
        </Button>

      </div>
    </motion.div>
  );
}
