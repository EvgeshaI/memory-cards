import { useEffect, useState } from 'react'
import { Alert, Stack } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import {
  FORUM_TOPICS,
  Topic,
  TopicCard,
  TopicCardSkeleton,
} from '@/entities/forum-topic'
import { RouteNames, routePaths } from '@/shared/constants/router'
import { times } from '@/shared/lib'

export const Topics = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const onTopicClick = (topic: Topic) => {
    navigate(routePaths[RouteNames.FORUM_TOPIC](topic.id))
  }

  useEffect(() => {
    // Временно, для тестирования
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  if (isLoading) {
    return (
      <Stack gap={15}>
        {times(5, index => (
          <TopicCardSkeleton key={index} />
        ))}
      </Stack>
    )
  }

  if (FORUM_TOPICS.length === 0) {
    return (
      <Alert
        variant="light"
        color="var(--text-color)"
        title="Ничего не найдено :("
        radius={50}
      />
    )
  }

  return (
    <Stack gap={15}>
      {FORUM_TOPICS.map(topic => (
        <TopicCard key={topic.id} topic={topic} onClick={onTopicClick} />
      ))}
    </Stack>
  )
}
