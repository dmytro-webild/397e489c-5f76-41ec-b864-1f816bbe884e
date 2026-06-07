import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Floora Artificials B.V. | Plantas Artificiais de Alta Qualidade',
  description: 'Descubra a beleza duradoura das plantas e flores artificiais premium da Floora Artificials B.V. para casa, escritório e eventos. Realismo sem manutenção.',
  keywords: ["plantas artificiais, flores artificiais, decoração, folhagem falsa, paisagismo, design de interiores, plantas realistas, Floora Artificials"],
  openGraph: {
    "title": "Floora Artificials B.V. | Plantas Artificiais de Alta Qualidade",
    "description": "Descubra a beleza duradoura das plantas e flores artificiais premium da Floora Artificials B.V. para casa, escritório e eventos. Realismo sem manutenção.",
    "url": "https://www.flooraartificials.com",
    "siteName": "Floora Artificials B.V.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/office-plant-frame_23-2148003034.jpg",
        "alt": "Planta artificial de folha de violino em sala de estar moderna"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Floora Artificials B.V. | Plantas Artificiais de Alta Qualidade",
    "description": "Descubra a beleza duradoura das plantas e flores artificiais premium da Floora Artificials B.V. para casa, escritório e eventos. Realismo sem manutenção.",
    "images": [
      "http://img.b2bpic.net/free-photo/office-plant-frame_23-2148003034.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
