import { Suspense } from "react";
import Link from "next/link";
import BusinessSocials from "./BusinessCardSocials";
import BusinessSocialsSkeleton from "./BusinessCardSocialsSkeleton";
import Icon from "components/Icon";

export default function Business() {
  return (
    <section className="space-y-md">
      <h1 className="text-center">
        <span className="block text-heading">Victor Nunes</span>
        <span className="text-caption uppercase text-foreground/secondary">
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
          <Icon name="Document" size="md" />
        </Link>
      )}
    </section>
  );
}
