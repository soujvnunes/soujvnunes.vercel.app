import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {process.env.GDOCS_CV_EXPORT && (
        <Link
          className="Button ButtonMd ButtonMain"
          target="_blank"
          rel="noreferrer noopener"
          href={process.env.GDOCS_CV_EXPORT}
        >
          CV
        </Link>
      )}
    </footer>
  );
}
