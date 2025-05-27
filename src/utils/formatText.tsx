import { JSX } from "react";

const REGEX =
  /((\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]))|((\b(www)\.[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]))/gi;
export const addLinkAnchors = (text: string): string =>
  text.replaceAll(REGEX, match => `<a href="${match}">${escapeHTML(match)}</a>`);

export const escapeHTML = (s: string): string =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("'", "&#39;")
    .replaceAll('"', "&quot");

export function link(text: string, searchedKey: string | null): string {
  const textEscape = searchedKey ? text : escapeHTML(text);
  return addLinkAnchors(textEscape);
}

export function addMarkdownLinks(text: string): string | any {
  if (text) return text?.replaceAll(REGEX, match => `[${match}](${match})`);
  return text
}

export function tag(text: string): JSX.Element {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

function replace(
  text: string,
  matches: RegExpMatchArray,
  toReplace: string,
  chart: string
) {
  let formatted = text
  const chartRegex = new RegExp('\\' + chart, 'g')
  matches.forEach((match) => {
    if (match) {
      formatted = formatted.replace(
        match,
        `<${toReplace}>${match.replace(chartRegex, '')}</${toReplace}>`
      )
    }
  })
  return formatted
}

export function applyBoldText(text: string) {
  let formatted = text
  const boldRegex = /(?:^\*|\s\*)(([\S]|\s)+?)(?:\*)/g
  const matches = formatted.match(boldRegex)
  if (matches) {
    formatted = replace(text, matches, 'b', '*')
  }
  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
}

export function applyBreakLine(text: string) {
  let formatted = text;
  const boldRegex = /(?:^|\s)\*((?:\\\*|[^\*])+?)\*/g;
  formatted = formatted.replace(boldRegex, (match, p1) => {
    return ` <b>${p1.trim()}</b>`;
  });
  formatted = formatted.replace(/\n/g, '<br />');

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
}

export function formatMessage(
  text: string,
  searchedKey: string | null,
): JSX.Element {
  let formattedText = text;
  formattedText = link(formattedText, searchedKey);
  return applyBreakLine(formattedText);
}