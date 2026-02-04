import React from "react";
import { Flex } from "antd";
import GlobalStyle from "../../globalStyles";
import styled from "styled-components";


const Section = styled.span`
    font: var(--gf-label-md-default);
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: var(--gf-color-button-primary);
    transition: color 150ms ease, font-weight 150ms ease;
`;

const Anchor = ({
    items,
    width=226,
    headerOffset=80,
    bannerOffset=55,
    containerStyle={},
}) => {
  const [activeKey, setActiveKey] = React.useState(0);
  const offset = headerOffset + bannerOffset

  const lockRef = React.useRef(false);
  const unlockTimerRef = React.useRef(null);

  const lockFor = (ms) => {
    lockRef.current = true;
    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      lockRef.current = false;
    }, ms);
  };

  const handleScroll = (key) => {
    setActiveKey(key);

    // lock observer updates while smooth scrolling passes other sections
    lockFor(800);

    const el = items?.[key]?.href?.current;
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  React.useEffect(() => {
    const observed = (items || [])
      .map((it, idx) => ({ key: idx, el: it.href?.current }))
      .filter((x) => x.el);

    if (!observed.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return; // ✅ ignore during click-scroll

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (!visible) return;

        const match = observed.find((x) => x.el === visible.target);
        if (match && match.key !== undefined) setActiveKey(match.key);
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.3],
        rootMargin: `-${offset}px 0px -80% 0px`,
      }
    );

    observed.forEach(({ el }) => obs.observe(el));

    return () => {
      obs.disconnect();
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    };
  }, [items]);

  return (
    <>
        <GlobalStyle />
        <Flex align="stretch">
          <Flex
            gap={8}
            vertical
            align="flex-start"
            style={{
              width: width,
              height: "fit-content",
              paddingTop: 48,
              top: offset,
              position: "sticky",
              paddingRight: 8,
              ...containerStyle
            }}
          >
            <span style={{ fontSize: 12 }}>
              {"Inhoudsopgave".toUpperCase()}
            </span>

            {items?.map((it, idx) => {
              const isActive = idx === activeKey;

              return (
                <div
                  key={idx}
                  onClick={() => handleScroll(idx)}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: 8,
                    cursor: "pointer",
                    background: isActive ? "#F0F6FF" : "transparent",
                    transition: "background 150ms ease",
                  }}
                >
                  <Section>
                    {it?.name}
                  </Section>
                </div>
              );
            })}
          </Flex>

          <div style={{ borderRight: "1px solid #DAE1ED" }} />
        </Flex>
    </>
  );
};

export default Anchor;
