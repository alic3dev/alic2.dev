import type { grouping_project } from "@data/projects/types";

import react from "react";

export const projects_web: grouping_project = {
  items: [
    {
      description: (
        <p>
          tracker:{"{"}manipulation|generation|modification{"}"}
          :[audio|sound|music]
          <br />
          <br />[<a href="https://bluegreen.alic2.dev/zer0">ゼロ</a>
          ]-&gt;{"{"}
          <a href="https://github.com/alic2dev/zer0">ZER0</a>
          {"}"}
        </p>
      ),
      open_link: "https://bluegreen.alic2.dev/",
      source_code_link: "https://github.com/alic2dev/bluegreen",
      technologies: ["react", "sass", "type_script", "vite"],
      title: "bluegreen",
    },
    {
      description: (
        <p>
          tirest:are_you_tired_yet?
          <br />
          <br />
          this_is_fun.. -you~know-
        </p>
      ),
      open_link: "https://tirest.alic2.dev/",
      source_code_link: "https://github.com/alic2dev/tirest",
      technologies: ["qwik", "sass", "type_script"],
      title: "tirest",
    },
    {
      description: (
        <p>
          {"{"}experiments{"}"}.utilizing(
          <a href="https://threejs.org/">three</a>);
        </p>
      ),
      open_link: "https://experimentalthirdprogression.alic2.dev/",
      source_code_link:
        "https://github.com/alic2dev/experimental_third_progression",
      technologies: ["react", "tensor_flow", "three", "type_script", "vite"],
      title: "experimental_third_progression",
    },
    {
      description: <p>minesweeper</p>,
      open_link: "https://sweep.alic2.dev/",
      source_code_link: "https://github.com/alic2dev/sweep",
      technologies: ["svelte", "type_script", "vite"],
      title: "sweep",
    },
    {
      description: (
        <p>
          based_on_a_book:
          <a href="https://natureofcode.com/">the_nature_of_code</a>
          <br />
          <br />
          organic, vegan, +gmo
        </p>
      ),
      open_link: "https://nature-of-code.alic2.dev/",
      source_code_link: "https://github.com/alic2dev/nature-of-code",
      technologies: ["react", "sass", "type_script", "vite"],
      title: "nature_of_code",
    },
    {
      description: (
        <p>
          learn_japanese_kana-&gt;{"{"}hiragana|katakana{"}"}
          <br />
          <br />
          time_restricted|recognition|repitition
        </p>
      ),
      open_link: "https://kana-totsugeki.alic2.dev/",
      source_code_link: "https://github.com/alic2dev/Kana-Totsugeki",
      technologies: ["react", "sass", "type_script", "vite"],
      title: "kana_totsugeki",
    },
  ],
  title: "web",
};
