import Image from 'next/image'

const Signature = (
  props: JSX.IntrinsicAttributes & Partial<React.ComponentProps<typeof Image>>
) => {
  return (
    <Image
      {...props}
      src='/assets/images/signature.webp'
      alt='Dwi Fitriana'
      width={300}
      height={90}
    />
  )
}

export default Signature
