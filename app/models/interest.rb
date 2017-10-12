class Interest < ApplicationRecord
  validates :user, :activity, presence: true
  validates :user, uniqueness: { scope: :activity }

  belongs_to :user
  belongs_to :activity


end
