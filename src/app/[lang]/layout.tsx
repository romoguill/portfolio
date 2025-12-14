import type { Metadata } from "next";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer";
import { Locale, i18n } from "../../i18n-config";
import { indieFlower, robotoMono, rubik } from "../fonts";
import "../globals.css";

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata: Record<Locale, Metadata> = {
    en: {
      title: "Rodrigo Moguillansky | Software Developer",
      description:
        "Industrial Engineer and web developer with 8 years of experience in process automation, ERP implementation, and business operations optimization. Specializing in web development and creating impactful business solutions.",
      keywords:
        "software developer, web developer, industrial engineer, full stack developer, typescript, react, next.js",
      authors: [{ name: "Rodrigo Moguillansky" }],
      openGraph: {
        title: "Rodrigo Moguillansky | Software Developer",
        description:
          "Industrial Engineer and web developer with 8 years of experience in process automation, ERP implementation, and business operations optimization.",
        type: "website",
        locale: "en_US",
        siteName: "Rodrigo Moguillansky Portfolio",
      },
      twitter: {
        card: "summary_large_image",
        title: "Rodrigo Moguillansky | Software Developer",
        description:
          "Industrial Engineer and web developer with 8 years of experience in process automation and web development.",
      },
    },
    es: {
      title: "Rodrigo Moguillansky | Desarrollador de Software",
      description:
        "Ingeniero Industrial y desarrollador web con 8 años de experiencia en automatización de procesos, implementación de ERP y optimización de operaciones comerciales. Especializado en desarrollo web y creación de soluciones empresariales de impacto.",
      keywords:
        "desarrollador de software, desarrollador web, ingeniero industrial, desarrollador full stack, typescript, react, next.js",
      authors: [{ name: "Rodrigo Moguillansky" }],
      openGraph: {
        title: "Rodrigo Moguillansky | Desarrollador de Software",
        description:
          "Ingeniero Industrial y desarrollador web con 8 años de experiencia en automatización de procesos, implementación de ERP y optimización de operaciones comerciales.",
        type: "website",
        locale: "es_ES",
        siteName: "Portfolio de Rodrigo Moguillansky",
      },
      twitter: {
        card: "summary_large_image",
        title: "Rodrigo Moguillansky | Desarrollador de Software",
        description:
          "Ingeniero Industrial y desarrollador web con 8 años de experiencia en automatización de procesos y desarrollo web.",
      },
    },
  };

  return {
    ...metadata[params.lang],
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang === "en" ? "en_US" : "es_ES"}
      className={`${rubik.variable} ${robotoMono.variable} ${indieFlower.variable}`}
    >
      <body>
        <MainContainer>
          <Header lang={params.lang} />
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
