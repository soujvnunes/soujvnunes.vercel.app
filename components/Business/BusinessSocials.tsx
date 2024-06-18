import getData from "actions/getData";
import Icon from "components/Icon";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Social = {
  name: "LinkedIn" | "GitHub" | "Behance" | "Medium";
  href: string;
};

export default async function BusinessSocials() {
  const socials = await getData<Social>({
    id: process.env.GAPI_SHEET_ID_SOCIALS,
  });

  return (
    <aside className="flex">
      {socials.map((social) => (
        <Link
          target="_blank"
          rel="noreferrer noopener"
          key={social.name}
          href={social.href}
          className={twMerge(
            "Button",
            social.name === "Behance" && "text-behance",
            social.name === "LinkedIn" && "text-linkedin",
            social.name === "GitHub" && "text-github",
            social.name === "Medium" && "text-medium",
          )}
        >
          <Icon name={social.name} />
        </Link>
      ))}
    </aside>
  );
}
