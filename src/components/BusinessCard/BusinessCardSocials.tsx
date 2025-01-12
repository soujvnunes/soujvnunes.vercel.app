import getData from "actions/getData";
import Icon from "components/Icon/Icon";
import theme from "lib/theme";
import Link from "next/link";

type Social = {
  name: "LinkedIn" | "GitHub" | "Behance" | "Medium";
  href: string;
};

export default async function BusinessSocials() {
  const socials = await getData<Social>({
    id: process.env.GAPI_SHEET_ID_SOCIALS,
  });

  return (
    <aside id="BusinessSocials" className="aside flex space-x-sm">
      {socials?.map((social) => {
        const title = `Visit my ${social.name} profile`;

        if (!social.href || !social.name) return;

        return (
          <Link
            target="_blank"
            rel="noreferrer noopener"
            key={social.name}
            href={social.href}
            aria-label={title}
            title={title}
            /*  className={twMerge(
              "Button ButtonMd",
              social.name === "Behance" && "ButtonBehance",
              social.name === "LinkedIn" && "ButtonLinkedIn",
              social.name === "GitHub" && "ButtonGitHub",
              social.name === "Medium" && "ButtonMedium",
            )} */
          >
            <Icon size="md" name={social.name} />
          </Link>
        );
      })}
    </aside>
  );
}
