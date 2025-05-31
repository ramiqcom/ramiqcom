import sections from '@/data/sections.json' with { type: "json" };

export default function Start() {
  const sectionDivs = sections.map((dict, key) => (
    <a
      style={{
        fontSize: 'xxx-large',
      }}
      key={key}
      href={`/${dict.value}`}
    >
      {dict.label}
    </a>
  ));
  return <div className='page flex big-gap ai-center ac-center jc-center text-center'>{sectionDivs}</div>;
}
