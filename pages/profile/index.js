import React from "react";
import Image from "next/image";
import styles from "../../styles/profile.module.css";

export default function profile() {
  return (
    <div className={styles.body}>
      <div className={styles.introduce_card}>
          <div className={styles.iname}>자기소개</div>
          <div className={styles.idesc}>안녕하세요. 중부대학교 정보보호학과 3학년에 재학중인 류재원입니다.</div>
          <div className={styles.idesc}>저는 현재 프론트엔드 개발자의 꿈을 가지고 수업에 임하고 있으며,</div>
          <div className={styles.idesc}>개인프로젝트, 단체프로젝트와 같은 자기개발을 통해 취업을 준비하고 있습니다.</div>
          <div className={styles.idesc}>열정을 무기로 끊임 없이 성장하여 뒤쳐지지 않는 밝은 개발자로 성장하고 싶습니다.</div>
          <div className={styles.iname}>개발언어</div>
          <div className={styles.idesc}>HTML, CSS, JS, Next.js, Python </div>
      </div>
      <div className={styles.profile_card}>
        <div className={styles.card_header}>
          <div className={styles.pic}>
            <Image src="/images.png" width={300} height={300} />
          </div>
          <div className={styles.name}>류재원</div>
          <div className={styles.desc}>3학년</div>
          <div className={styles.desc}>중부대학교 정보보호학과</div>
          <div className={styles.desc}>010-6255-6170</div>
          <div className={styles.desc}>wodnjs6159@naver.com</div>
          

        </div>
      </div>
    </div>
  );
}