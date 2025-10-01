import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Mail, Video, Users, Sparkles, Shield, Heart, Gamepad2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '@/assets/logo.png'
import playthroughClip from '@/assets/playthrough-clip.mov'
import still1 from '@/assets/still1.png'
import still2 from '@/assets/still2.png'
import still3 from '@/assets/still3.png'
import still4 from '@/assets/still4.png'
import hero from '@/assets/hero.png'

const stills = [
  still1,
  still2,
  still3,
  still4,
]

function Section({ id, title, subtitle, children }: any) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

function Pill({ children }: any) {
  return <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm mr-2 mb-2">{children}</span>
}

export default function RecruitPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground">
      {/* Sticky Nav */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Roll and Gun Logo" className="h-8 w-8 rounded" />
            <span className="font-bold">Roll and Gun</span>
          </div>
          <nav className="ml-auto hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">소개</a>
            <a href="#video" className="hover:underline">영상</a>
            <a href="#timeline" className="hover:underline">마일스톤</a>
            <a href="#hiring" className="hover:underline">구인</a>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3">
              <Pill>탑다운 · 캐주얼 · 배틀로얄</Pill>
              <Pill>픽셀아트</Pill>
              <Pill>PC · WebGL</Pill>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              먹고, 쏘고, 구르세요!<br />
              <span className="text-primary">Roll and Gun</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              경쾌한 굴러가기와 사격의 리듬으로 마지막 1인이 될 때까지! 짧은 러닝타임, 직관적인 조작, 깊이 있는 메타 진행을 목표로 하는 탑다운 캐주얼 배틀로얄입니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* ✅ 가장 중요한 CTA: 게임 해보기 */}
              <Button
                asChild
                size="lg"
                className="relative shadow-xl scale-[1.03] hover:scale-105 transition-transform
               after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none
               after:ring-2 after:ring-primary/30"
                aria-label="게임 해보기 - rollandgun.io에서 바로 플레이"
              >
                <a href="https://rollandgun.io" target="_blank" rel="noreferrer">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  게임 해보기
                  <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-80" />
                </a>
              </Button>

              {/* 기존: 게임 플레이 보기(영상) */}
              <Button asChild size="lg" variant="outline">
                <a href="#video">
                  <Video className="mr-2 h-4 w-4" />
                  게임 플레이 보기
                </a>
              </Button>

              {/* 기존: 디자이너 합류하기 */}
              <Button asChild variant="outline" size="lg">
                <a href="#hiring">
                  <Users className="mr-2 h-4 w-4" />
                  디자이너 합류하기
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[16/10] w-full rounded-2xl border bg-muted/40 grid place-items-center overflow-hidden shadow-xl">
              <img
                src={hero}
                alt="Game Key Art"
                className="object-cover w-full h-full"
                style={{
                  imageRendering: 'pixelated',
                }}
              />
            </div>
          </motion.div>
        </div>
      </header>

      <Section id="about" title="게임 소개" subtitle="짧고 굵게, 한 판 더를 부르는 설계">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-sm">
            <CardHeader><CardTitle>코어 루프</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2"><span className="mt-0.5"><Sparkles className="h-4 w-4" /></span>빠른 매칭 → 드랍 인 → 근/중거리 교전</li>
                <li className="flex items-start gap-2"><span className="mt-0.5"><Shield className="h-4 w-4" /></span>루팅으로 빌드업: 무기/패시브/유틸</li>
                <li className="flex items-start gap-2"><span className="mt-0.5"><Heart className="h-4 w-4" /></span>특수기를 통한 변수: 구르기/대쉬</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader><CardTitle>지향하는 감각</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm md:text-base">
                <li>경쾌한 픽셀 이펙트, 명확한 타격감</li>
                <li>3~5분 세션의 빠른 템포의 전투</li>
                <li>다양한 캐릭터와 아이템을 통한 플레이스타일 다변화</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="video" title="게임 플레이 영상" subtitle="초기 프로토타입 플레이 캡처">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border shadow-lg">
            {/* 유튜브 링크 교체 */}
            <video className="h-full w-full" src={playthroughClip} controls autoPlay loop />
          </div>
          <Card>
            <CardHeader><CardTitle>스틸/애니메이션 샘플</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="aspect-square rounded-lg border overflow-hidden bg-muted/40 grid place-items-center">
                    <img src={stills[i]} alt={`Still ${i + 1}`} className="object-cover h-full" style={{ imageRendering: 'pixelated' }} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section
        id="timeline"
        title="로드맵 & 마일스톤"
        subtitle="핵심 기능 → 수익화 → 스팀 출시까지 빠르게 이어갑니다"
      >
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          {/* M1: 팀전 */}
          <Card className="shadow-sm">
            <CardHeader><CardTitle>M1 · 팀전</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>파티/매칭(트리오), 팀 UI(HUD/팀 핑/킬 로그)</li>
                <li>다운/구출(다운→부활) 규칙, 프렌들리 파이어 설정</li>
                <li>팀 커뮤니케이션</li>
              </ul>
            </CardContent>
          </Card>

          {/* M2: 모바일 지원 */}
          <Card className="shadow-sm">
            <CardHeader><CardTitle>M2 · 모바일 지원(iOS/Android)</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>터치 컨트롤(버추얼 스틱/버튼), 햅틱 피드백</li>
                <li>퍼포먼스 / 네트워크 최적화</li>
                <li>빌드 파이프라인: Android/iOS 셋업</li>
              </ul>
            </CardContent>
          </Card>

          {/* M3: BM(비즈니스 모델) 개발 */}
          <Card className="shadow-sm">
            <CardHeader><CardTitle>M3 · BM 개발(수익화)</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>코스메틱 파이프라인(스킨/이모트/킬 이펙트)</li>
                <li>상점 UI/통화(무료·유료), 보상 루프(데일리·주간)</li>
                <li>배틀패스(선택): 시즌 티어/미션/보상</li>
              </ul>
            </CardContent>
          </Card>

          {/* M4: 스팀 출시 준비 */}
          <Card className="shadow-sm">
            <CardHeader><CardTitle>M4 · 스팀 출시</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Steamworks: 빌드/디포/브랜치, 성과·클라우드(선택)</li>
                <li>스토어 에셋: 캡슐/스크린샷/트레일러/설명</li>
                <li>플레이테스트/비공개 베타, 크래시/텔레메트리</li>
                <li>심사·세금/서류, 출시 체크리스트</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="hiring" title="디자이너 구인" subtitle="함께 게임의 얼굴과 손맛을 완성할 분들을 모십니다">
        <div className='mb-6'>
          <p className="text-sm text-muted-foreground">* 정기적인 급여를 지급하는 채용 공고가 아니며, 현재 개발 초기 단계로 구체적인 보상에 대해 협의할 수 있는 단계는 아닙니다. 보상에 대해서는 추후 기여도를 바탕으로 다시 논의할 예정입니다.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardHeader><CardTitle>UI/UX</CardTitle></CardHeader><CardContent className="text-sm space-y-1">
            <ul className="list-disc pl-5">
              <li>HUD, 인벤토리, 킬로그 등 UI 전반</li>
              <li>로고</li>
              <li>테마</li>
            </ul>
          </CardContent></Card>
          <Card><CardHeader><CardTitle>픽셀아트/이펙트</CardTitle></CardHeader><CardContent className="text-sm space-y-1">
            <ul className="list-disc pl-5">
              <li>32×32/16×16 스프라이트</li>
              <li>12~24fps 셀 애니</li>
              <li>캐릭터</li>
              <li>환경 및 사물</li>
              <li>총구 화염/피격/폭발 VFX</li>
            </ul>
          </CardContent></Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>협업 환경</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>툴: Aseprite, Unity</p>
              <p>엔진: Unity(URP, UI Toolkit)</p>
              <p>이슈: GitHub</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>지원</CardTitle></CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Input type="email" placeholder="이메일 주소" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button asChild><a href="mailto:rkdrnf@gmail.com?subject=%5B지원%5D%20디자인%20포지션"><Mail className="mr-2 h-4 w-4" />이메일</a></Button>
              </div>
              <p className="text-xs text-muted-foreground">포트폴리오 링크와 포지션을 함께 보내주세요.</p>
            </CardContent>
          </Card>
        </div>
      </Section>
      <footer className="border-t py-10 mt-8">
        <div className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Roll and Gun. All rights reserved. · <Link to="/" className="underline">홈</Link>
        </div>
      </footer>
    </div>
  )
}
