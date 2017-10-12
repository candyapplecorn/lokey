class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username and/or password"], status: 401
    end
  end

  def destroy
    if (!logged_in?)
      render json: ["A user must be logged in to log out"], status: 404
    else
      logout!(current_user)
      render json: {}, status: 200
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
