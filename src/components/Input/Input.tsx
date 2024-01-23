/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeHolder?: string
  className?: string
  name: string
  rules?: RegisterOptions
  autoComplete?: string
  register: UseFormRegister<any>
}
export default function Input({
  type,
  errorMessage,
  placeHolder,
  className,
  name,
  rules,
  autoComplete,
  register
}: InputProps) {
  return (
    <div className={className}>
      <input
        {...register(name, rules)}
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeHolder}
        autoComplete={autoComplete}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
