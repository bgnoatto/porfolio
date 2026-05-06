import {
  SiSpringboot,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiMysql,
  SiPostgresql,
} from '@icons-pack/react-simple-icons'
import { Globe, Coffee, Database } from 'lucide-react'
import type { TechItem } from '@/lib/types'

type IconComponent = React.ComponentType<{ size?: number; color?: string; className?: string }>

const iconMap: Record<string, IconComponent> = {
  java: (props) => <Coffee {...props} />,
  springboot: (props) => <SiSpringboot {...props} />,
  nodedotjs: (props) => <SiNodedotjs {...props} />,
  openapiinitiative: (props) => <Globe {...props} />,
  docker: (props) => <SiDocker {...props} />,
  kubernetes: (props) => <SiKubernetes {...props} />,
  git: (props) => <SiGit {...props} />,
  mysql: (props) => <SiMysql {...props} />,
  microsoftsqlserver: (props) => <Database {...props} />,
  postgresql: (props) => <SiPostgresql {...props} />,
}

interface TechChipProps {
  item: TechItem
}

export function TechChip({ item }: TechChipProps) {
  const Icon = iconMap[item.iconSlug] ?? Globe

  return (
    <div className="glass-card px-4 py-3 flex items-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_20px_var(--accent-glow)] cursor-default group">
      <Icon size={20} color="var(--accent)" />
      <span className="text-sm text-[--text-primary] font-medium">{item.name}</span>
      <span className="ml-auto font-mono text-xs text-[--accent]">
        {'●'.repeat(item.dots)}{'○'.repeat(5 - item.dots)}
      </span>
    </div>
  )
}
