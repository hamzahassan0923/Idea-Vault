"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Lightbulb,
  ImagePlus,
  Tags,
  DollarSign,
  Target,
  ShieldQuestion,
  Sparkles,
  Layers3,
  Send,
} from "lucide-react"

const AddIdeaPage = () => {

  const [formData, setFormData] = useState({
    ideaTitle: "",
    shortDescription: "",
    detailedDescription: "",
    category: "Tech",
    tags: "",
    imageURL: "",
    estimatedBudget: "",
    targetAudience: "",
    problemStatement: "",
    proposedSolution: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const finalData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    }

    console.log(finalData)

    alert("Idea Submitted Successfully 🚀")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-10 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-5">
            <Sparkles size={18} />
            Submit Your Innovative Idea
          </div>

          <h1 className="text-5xl font-black bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4">
            Add New Idea
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Share your creative project, startup concept, or AI innovation
            with the world.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl"
        >
          <InputField
            icon={<Lightbulb size={18} />}
            label="Idea Title"
            name="ideaTitle"
            value={formData.ideaTitle}
            onChange={handleChange}
            placeholder="Enter your idea title"
          />

          <div>
            <label className="text-sm text-slate-300 mb-2 block">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-slate-900/70 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-blue-500"
            >
              <option>Tech</option>
              <option>AI</option>
              <option>Health</option>
              <option>Education</option>
              <option>Business</option>
              <option>Security</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <TextAreaField
              label="Short Description"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Write a short description"
            />
          </div>

          <div className="md:col-span-2">
            <TextAreaField
              label="Detailed Description"
              name="detailedDescription"
              value={formData.detailedDescription}
              onChange={handleChange}
              placeholder="Write detailed information about your idea"
            />
          </div>

          <InputField
            icon={<Tags size={18} />}
            label="Tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="AI, Startup, Security"
          />

          <InputField
            icon={<ImagePlus size={18} />}
            label="Image URL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />

          <InputField
            icon={<DollarSign size={18} />}
            label="Estimated Budget"
            name="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={handleChange}
            placeholder="$5000"
          />

          <InputField
            icon={<Target size={18} />}
            label="Target Audience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            placeholder="Who will use this idea?"
          />

          <div className="md:col-span-2">
            <TextAreaField
              label="Problem Statement"
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              placeholder="What problem does this solve?"
            />
          </div>

          <div className="md:col-span-2">
            <TextAreaField
              label="Proposed Solution"
              name="proposedSolution"
              value={formData.proposedSolution}
              onChange={handleChange}
              placeholder="Describe your solution"
            />
          </div>

          {/* Preview */}
          {formData.imageURL && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:col-span-2 overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={formData.imageURL}
                alt="Preview"
                className="w-full h-[350px] object-cover"
              />
            </motion.div>
          )}

          {/* Submit */}
          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/30 transition"
            >
              <Send size={20} />
              Submit Idea
            </motion.button>
          </div>
        </motion.form>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers3 className="text-blue-400" />
            <h2 className="text-2xl font-bold">Tips for Better Ideas</h2>
          </div>

          <ul className="space-y-3 text-slate-300">
            <li>• Keep your title short and memorable.</li>
            <li>• Explain the real-world problem clearly.</li>
            <li>• Add a clean and relevant image.</li>
            <li>• Describe your solution simply and effectively.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

function InputField({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="text-sm text-slate-300 mb-2 block">
        {label}
      </label>

      <div className="flex items-center gap-3 bg-slate-900/70 border border-white/10 rounded-2xl px-4 py-4 focus-within:border-blue-500 transition">
        <div className="text-blue-400">{icon}</div>

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent w-full outline-none placeholder:text-slate-500"
        />
      </div>
    </div>
  )
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="text-sm text-slate-300 mb-2 block">
        {label}
      </label>

      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-slate-900/70 border border-white/10 rounded-2xl px-4 py-4 outline-none focus:border-blue-500 placeholder:text-slate-500 resize-none"
      />
    </div>
  )
}

export default AddIdeaPage;