import { type RawContributions } from "actions/getContributions";

const actionNames = {
  visit: "visit",
  contribution: "contribution",
  article: "article",
  presentation: "presentation",
} as const;
const actionIcons = {
  arrowOutward: "ArrowOutward",
  gitHub: "GitHub",
  medium: "Medium",
  behance: "Behance",
} as const;

type ActionName = typeof actionNames;
type ActionNames = keyof ActionName;
type ActionIcon = typeof actionIcons;
type ActionIcons = keyof ActionIcon;

type Contribution = {
  id: string;
  bannerSrc: string;
  name: string;
  publishedAt: string;
  company: string;
  avatarSrc: string;
  description: string;
  actions: {
    name: ActionName[ActionNames];
    iconStart: ActionIcon[ActionIcons];
    href: string;
  }[];
  tags: (
    | "NextJS"
    | "TailwindCSS"
    | "Figma"
    | "StyledComponents"
    | "React"
    | "Sass"
    | "AdobeXD"
    | "MaterialUI"
  )[];
};

function isAction(params: string): params is ActionNames {
  return Object.values(actionNames).includes(params as ActionNames);
}

export default function buildContributions(params: RawContributions) {
  let contributions: Contribution[] = [];

  if (!Array.isArray(params)) return contributions;

  const [keys, ...rawContributions] = params;

  for (let rawContribution of rawContributions) {
    const contribution = rawContribution.reduce(
      (previousValue, value, index) => {
        let key = keys[index];

        if (isAction(key)) {
          if (value === "null") return previousValue;

          const action = {
            name: key,
            href: value,
            iconStart: {
              [actionNames.visit]: actionIcons.arrowOutward,
              [actionNames.contribution]: actionIcons.gitHub,
              [actionNames.article]: actionIcons.medium,
              [actionNames.presentation]: actionIcons.behance,
            }[key],
          };

          return {
            ...previousValue,
            actions: Array.isArray(previousValue.actions)
              ? [...previousValue.actions, action]
              : [action],
          };
        }

        return {
          ...previousValue,
          [key]: key === "tags" ? value.split(",") : value,
        };
      },
      {} as Contribution,
    );

    contributions = [...contributions, contribution];
  }

  return contributions;
}
