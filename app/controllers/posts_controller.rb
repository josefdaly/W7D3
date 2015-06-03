class PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: {'body' => 'overwrite'}
    else
      raise Exception.new "Something went horribly wrong"
    end

  end

  private

    def post_params
      params.require(:post).permit(:title, :body)
    end

end
