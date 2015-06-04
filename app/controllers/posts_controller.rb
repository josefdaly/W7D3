class PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      raise Exception.new "Something went horribly wrong"
    end
  end

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: @post
    else
      raise Exception.new "To destroy is not in my programming"
    end
  end

  private

    def post_params
      params.require(:post).permit(:title, :body)
    end

end
