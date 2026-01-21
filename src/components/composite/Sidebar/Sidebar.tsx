"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { styles as s } from "./Sidebar.styles";
export default function Sidebar() {
  return (
    <div className={s.wrapper}>
      <section className="flex flex-col items-center lg:items-start">
        <div className="relative w-[140px] h-[140px] mb-8">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className={s.avatar}
            priority
          />
        </div>
        <h1 className={s.name}>{profile.name}</h1>
        <p className={s.role}>{profile.role}</p>
        {profile.quote && (
          <div className={s.quoteWrapper}>
            <span className={`${s.quoteSymbol} left-0 top-0`}>“</span>
            <p className={s.quoteText}>{profile.quote.text}</p>
            <span className={`${s.quoteSymbol} right-0 bottom-4`}>”</span>
            <p className={s.quoteAuthor}>{profile.quote.author}</p>
          </div>
        )}
      </section>
      <hr className={s.divider} />
      <section className={s.sectionStack}>
        {profile.contact.map((item) => (
          <div key={item.label} className={s.contactItem}>
            <div className={s.iconBox}>
              <Image
                src={`/assets/${item.icon}`}
                alt=""
                width={13}
                height={13}
                className={s.iconImage}
              />
            </div>
            <div>
              <p className={s.label}>{item.label}</p>
              <p className={s.value}>{item.value}</p>
            </div>
          </div>
        ))}
      </section>
      <hr className={s.divider} />
      <section>
        <h3 className={s.sectionTitle}>Socials</h3>
        <div className="space-y-6">
          {profile.socials.map((item) => (
            <div key={item.label} className={s.socialItem}>
              <Image
                src={`/assets/${item.icon}`}
                alt=""
                width={32}
                height={32}
                className={s.socialIcon}
              />
              <div>
                <p className={s.socialLabel}>{item.label}</p>
                <p className={s.socialValue}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className={s.divider} />
      <section>
        <h3 className={s.sectionTitle}>Languages</h3>
        <div className="space-y-6">
          {profile.languages.map((lang) => (
            <div key={lang.name} className={s.langItem}>
              <div className={s.langFlagWrapper}>
                <Image
                  src={`/assets/${lang.icon}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className={s.langName}>{lang.name}</p>
                <p className={s.langLevel}>{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}