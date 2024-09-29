import { Suspense } from "react";
import Link from "next/link";
import BusinessSocials from "./BusinessSocials";
import BusinessSocialsSkeleton from "./BusinessSocialsSkeleton";
import Icon from "components/Icon";

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
          className="Button ButtonMd ButtonMain ButtonFull"
          target="_blank"
          rel="noreferrer noopener"
          href={process.env.GDOCS_CV_SHARE}
        >
          View CV
          <Icon name="Document" className="Icon IconMd IconEnd" />
        </Link>
      )}
    </section>
  );
}
