import { Suspense } from "react";
import Link from "next/link";
import BusinessSocials from "./BusinessSocials";
import BusinessSocialsSkeleton from "./BusinessSocialsSkeleton";

export default function Business() {
  return (
    <section>
      <Suspense fallback={<BusinessSocialsSkeleton />}>
        <BusinessSocials />
      </Suspense>
      {process.env.GDOCS_CV && (
        <Link
          className="Button"
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
