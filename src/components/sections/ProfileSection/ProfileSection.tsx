"use client";

import Image from "next/image";
import { profileStyles as s } from "./ProfileSection.styles";
import { profile } from "@/data/profile";

export default function ProfileSection() {
  const { name, role, image, quote, contact, socials, languages } = profile;

  return (
    <section className={s.container}>
      <div className={s.header.wrapper}>
        <div className={s.header.avatarWrapper}>
          <Image
            src={`/assets/${image}`}
            alt={name}
            fill
            className={s.header.avatar}
            priority
          />
        </div>
        <h1 className={s.header.name}>{name}</h1>
        <p className={s.header.role}>{role}</p>
      </div>
      <div className={s.quote.wrapper}>
        <span className={`${s.quote.symbol} top-0 left-0`}>“</span>
        <p className={s.quote.text}>{quote.text}</p>
        <p className={s.quote.author}>— {quote.author}</p>
        <span className={`${s.quote.symbol} bottom-0 right-0`}>”</span>
      </div>
      <hr className={s.divider} />
      <div className="flex flex-col gap-6">
        {contact.map((item, idx) => (
          <div key={idx} className={s.contact.item}>
            <div className={s.contact.iconBox}>
              <Image
                src={`/assets/${item.icon}`}
                alt=""
                width={18}
                height={18}
              />
            </div>
            <div className="flex flex-col">
              <span className={s.contact.label}>{item.label}</span>
              <span className={s.contact.value}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      <hr className={s.divider} />
      <div className="flex flex-col gap-5">
        <p className={s.sectionLabel}>Socials</p>
        {socials.map((social, idx) => (
          <div key={idx} className={s.socials.item}>
            <Image
              src={`/assets/${social.icon}`}
              alt={social.label}
              width={24}
              height={24}
            />
            <div className="flex flex-col">
              <span className={s.socials.label}>{social.label}</span>
              <span className={s.socials.value}>{social.value}</span>
            </div>
          </div>
        ))}
      </div>
      <hr className={s.divider} />
      <div className="flex flex-col gap-5">
        <p className={s.sectionLabel}>Languages</p>
        {languages.map((lang, idx) => (
          <div key={idx} className={s.languages.item}>
            <div className={s.languages.flagWrapper}>
              <Image
                src={`/assets/${lang.icon}`}
                alt={lang.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className={s.languages.name}>{lang.name}</p>
              <p className={s.languages.level}>{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
