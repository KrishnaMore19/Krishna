'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-widest uppercase text-cosmic-muted">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Krishna More"
            className="cosmic-input"
          />
          {errors.name && (
            <span className="text-red-400 text-xs">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs tracking-widest uppercase text-cosmic-muted">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            })}
            placeholder="you@company.com"
            className="cosmic-input"
          />
          {errors.email && (
            <span className="text-red-400 text-xs">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs tracking-widest uppercase text-cosmic-muted">
          Subject
        </label>
        <input
          {...register('subject', { required: 'Subject is required' })}
          placeholder="Hiring / Freelance / Collaboration"
          className="cosmic-input"
        />
        {errors.subject && (
          <span className="text-red-400 text-xs">{errors.subject.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs tracking-widest uppercase text-cosmic-muted">
          Message
        </label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Please write at least 20 characters' },
          })}
          rows={5}
          placeholder="Tell me about the opportunity..."
          className="cosmic-input resize-none"
        />
        {errors.message && (
          <span className="text-red-400 text-xs">{errors.message.message}</span>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 rounded-xl text-sm"
            style={{
              background: 'rgba(0,229,150,0.08)',
              border: '0.5px solid rgba(0,229,150,0.3)',
              color: '#00E596',
            }}
          >
            <CheckCircle size={16} />
            Message sent! I'll get back to you within 24 hours.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 rounded-xl text-sm"
            style={{
              background: 'rgba(255,60,60,0.08)',
              border: '0.5px solid rgba(255,60,60,0.3)',
              color: '#FF6B6B',
            }}
          >
            <AlertCircle size={16} />
            Something went wrong. Please email me directly at krishna.more8200@gmail.com
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
