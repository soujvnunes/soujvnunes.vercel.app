import { Suspense } from "react";
import Link from "next/link";
import BusinessSocials from "./BusinessSocials";
import BusinessSocialsSkeleton from "./BusinessSocialsSkeleton";

export default function Business() {
  return (
    <section className="space-y-md">
      <h1 className="text-center">
        <span className="TypographyHeading block">Victor Nunes</span>
        <span className="TypographyCaption TypographySecondary">
          Software Engineer
        </span>
      </h1>
      <Suspense fallback={<BusinessSocialsSkeleton />}>
        <BusinessSocials />
      </Suspense>
      {process.env.GDOCS_CV_SHARE && (
        <Link
          className="Button ButtonMd ButtonMain"
          target="_blank"
          rel="noreferrer noopener"
          href={process.env.GDOCS_CV_SHARE}
        >
          View CV
        </Link>
      )}
    </section>
  );
}
