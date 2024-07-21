import { Suspense } from "react";
import Link from "next/link";
import BusinessSocials from "./BusinessSocials";
import BusinessSocialsSkeleton from "./BusinessSocialsSkeleton";

export default function Business() {
  return (
    <section className="space-y-md">
      <h1 className="text-center">
        <span className="TypographyHeading block">John Victor</span>
        <span className="TypographyCaption TypographySecondary">
          software engineer
        </span>
      </h1>
      <Suspense fallback={<BusinessSocialsSkeleton />}>
        <BusinessSocials />
      </Suspense>
      {process.env.GDOCS_CV && (
        <Link
          className="Button ButtonMd ButtonMain"
          target="_blank"
          rel="noreferrer noopener"
          href={process.env.GDOCS_CV}
        >
          See Résumé
        </Link>
      )}
    </section>
  );
}
