class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :set_user, only: [:show, :update, :destory]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])

    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @user.gen_hero1
      @user.gen_hero2
      @user.gen_hero3
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unpro8cessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
