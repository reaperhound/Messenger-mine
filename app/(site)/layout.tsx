
export const metadata = {
  icons : {
    icon : {
      url: "/logo-mine.png",
      type: "image/png"
    },
  },
  title: "Sign In",
  Description : " Authentication page"
}

export default function AuthLayout ({ children } : {children : React.ReactNode}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}