export const topics = [
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    description: '记录 AI 工具在学习、写作、项目规划和工作流中的实际使用。',
    detail: [
      '记录 AI 工具在学习、写作、项目规划和工作流中的实际使用。',
      '这里会逐步整理具体使用场景、有效做法和踩过的坑。',
    ],
  },
  {
    slug: 'digital-products',
    title: 'Digital Products',
    description: '整理数字产品、原型验证和小型产品想法。',
    detail: [
      '整理数字产品、原型验证和小型产品想法。',
      '重点不是一次性做完整产品，而是记录问题、假设、验证方式和取舍。',
    ],
  },
  {
    slug: 'personal-systems',
    title: 'Personal Systems',
    description: '整理个人效率系统、知识结构和长期维护方法。',
    detail: [
      '整理个人效率系统、知识结构和长期维护方法。',
      '这里会记录一些稳定可复用的流程，而不是追求复杂工具堆叠。',
    ],
  },
  {
    slug: 'writing',
    title: 'Writing',
    description: '记录项目过程、工具使用和阶段性思考。',
    detail: [
      '记录项目过程、工具使用和阶段性思考。',
      '内容会随着实际项目和学习进展逐步补充。',
    ],
  },
  {
    slug: 'learning',
    title: 'Learning',
    description: '整理学习路径、英文表达和技术理解。',
    detail: [
      '整理学习路径、英文表达和技术理解。',
      '这里会记录阶段性学习方法、资料选择和复盘。',
    ],
  },
];

export function getTopicBySlug(slug: string) {
  return topics.find((t) => t.slug === slug);
}
