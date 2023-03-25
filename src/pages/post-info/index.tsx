import { usePostInfo } from '@/pages/post-info/use-post-info'
import { ListCount } from '@/components/list-count'
import { Loader } from '@/components/loader'
import { Post } from '@/components/post'
import { Title } from '@/components/title'
import * as S from './styles'

export function PostInfo () {
  const {
    comments,
    commentsCount,
    isCommentsLoading,
    post,
  } = usePostInfo()

  return (
    <div>
      <Loader isLoading={isCommentsLoading} />

      {post && (
        <Post
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
          isComment
          isHighlighted
        />
      )}

      <S.Divider />

      {!isCommentsLoading && !!commentsCount && (
        <section>
          <S.Header>
            <Title as='h2'>Comentários</Title>
            <ListCount>{commentsCount} comentários</ListCount>
          </S.Header>

          <S.ListContainer>
            {comments.map((comment) => (
              <Post
                key={comment.id}
                id={comment.id}
                userId={comment.id}
                title={comment.name}
                body={comment.body}
                email={comment.email}
                isComment
              />
            ))}
          </S.ListContainer>
        </section>
      )}
    </div>
  )
}
