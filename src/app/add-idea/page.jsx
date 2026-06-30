"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,

} from "@heroui/react";
import toast from "react-hot-toast";

const inputStyles = {
  base: "w-full",
  inputWrapper:
    "bg-white/5 border border-white/10 hover:border-cyan-400 focus-within:border-cyan-400 backdrop-blur-xl rounded-2xl",
  input: "text-white placeholder:text-gray-500",
};

const IdeaAddPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const idea = Object.fromEntries(formData.entries());

    console.log(idea);
    const res = await fetch('https://idea-vault-server-kappa.vercel.app/ideas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(idea)
    })

    const data = await res.json()
    if (data.insertedId) {
      toast.success("Idea Added Successfully");
      e.target.reset();
    } else {
      toast.error("Failed to Add Idea");
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#020617] via-[#071129] to-[#0f172a] p-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      {/* CARD */}
      <div className="relative w-full max-w-4xl bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)] rounded-3xl border border-white/10 p-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            💡 Share Your Idea
          </h1>

          <p className="text-gray-400 mt-3 text-sm">
            Turn your imagination into reality
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Idea Title */}
            <div className="md:col-span-2">
              <TextField name="ideaTitle" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Idea Title
                </Label>

                <Input
                  placeholder="Smart AI Study Assistant"
                  className={inputStyles}
                />

                <FieldError />
              </TextField>
            </div>

            {/* Short Description */}
            <div className="md:col-span-2">
              <TextField name="shortDescription" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Short Description
                </Label>

                <Input
                  placeholder="One line summary of your idea"
                  className={inputStyles}
                />

                <FieldError />
              </TextField>
            </div>

            {/* Detailed Description */}
            <div className="md:col-span-2">
              <TextField name="detailedDescription" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Detailed Description
                </Label>

                <TextArea
                  placeholder="Explain your idea in detail..."

                  className={{
                    ...inputStyles,
                    inputWrapper: `${inputStyles.inputWrapper} min-h-32`,
                  }}
                />

                <FieldError />
              </TextField>
            </div>

            {/* Category
            <div>
              <Select name="category" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Category
                </Label>

                <Button className="w-full justify-between bg-white/5 border border-white/10 hover:border-cyan-400 text-white rounded-2xl">
                  Select category
                </Button>

                <Select.Popover className="bg-[#0f172a] border border-white/10 text-white rounded-2xl">
                  <ListBox>
                    <ListBox.Item id="Tech">Tech</ListBox.Item>
                    <ListBox.Item id="AI">AI</ListBox.Item>
                    <ListBox.Item id="Health">Health</ListBox.Item>
                    <ListBox.Item id="Education">Education</ListBox.Item>
                    <ListBox.Item id="Finance">Finance</ListBox.Item>
                    <ListBox.Item id="Social">Social</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div> */}

            {/* Tags */}
            <div>
              <TextField name="tags">
                <Label className="text-gray-300 mb-2 block">
                  Tags (optional)
                </Label>

                <Input
                  placeholder="AI, startup, automation"
                  className={inputStyles}
                />

                <FieldError />
              </TextField>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageURL" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Image URL
                </Label>

                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className={inputStyles}
                />

                <FieldError />
              </TextField>
            </div>

            {/* Budget */}
            <TextField name="estimatedBudget">
              <Label className="text-gray-300 mb-2 block">
                Estimated Budget
              </Label>

              <Input
                type="number"
                placeholder="5000 USD"
                className={inputStyles}
              />

              <FieldError />
            </TextField>

            {/* Target Audience */}
            <TextField name="targetAudience" isRequired>
              <Label className="text-gray-300 mb-2 block">
                Target Audience
              </Label>

              <Input
                placeholder="Students, Developers..."
                className={inputStyles}
              />

              <FieldError />
            </TextField>

            {/* Problem */}
            <div className="md:col-span-2">
              <TextField name="problemStatement" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Problem Statement
                </Label>

                <TextArea
                  placeholder="What problem does your idea solve?"

                  className={{
                    ...inputStyles,
                    inputWrapper: `${inputStyles.inputWrapper} min-h-28`,
                  }}
                />

                <FieldError />
              </TextField>
            </div>

            {/* Solution */}
            <div className="md:col-span-2">
              <TextField name="proposedSolution" isRequired>
                <Label className="text-gray-300 mb-2 block">
                  Proposed Solution
                </Label>

                <TextArea
                  placeholder="How does your idea solve the problem?"

                  className={{
                    ...inputStyles,
                    inputWrapper: `${inputStyles.inputWrapper} min-h-28`,
                  }}
                />

                <FieldError />
              </TextField>
            </div>

          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 text-white py-7 rounded-2xl text-lg font-semibold shadow-[0_0_25px_rgba(0,255,255,0.3)]"
          >
            🚀 Submit Idea
          </Button>

        </form>
      </div>
    </div>
  );
};

export default IdeaAddPage;