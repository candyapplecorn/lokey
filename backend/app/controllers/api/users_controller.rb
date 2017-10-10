class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    logout!(@user)
    @user.destroy
    render :show
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
